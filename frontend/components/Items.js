import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Title from './Item';
import styled from 'styled-components';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

const Center = styled.div`
    text-align: center;
`;

const ItemList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

class Items extends Component {
    render() {
        return (
            <Center>
                <Query query={ALL_ITEMS_QUERY}>
                    {({data, error, loading}) => {
                        console.log(data);
                        if (loading) {
                            return <p>Loading...</p>
                        }
                        if (error) {
                            return <p>Error: {error.message}</p>
                        }
                        if (data) {
                            return <ItemList>
                                {
                                    data.items.map(item => 
                                        <Item item={ item } key={ item.id }></Item>
                                    )
                                }
                            </ItemList>
                        }
                        return <p>Hey No Data found...</p>
                    }}
                </Query>
            </Center>
        );
    }
}

export default Items;