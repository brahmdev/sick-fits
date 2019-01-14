const mutations = {
    async createItem(parent, args, ctx, info) {

        //Todo check if the user is logged in

        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);

        return item;
    }
    
    /*createDog(parent, args, ctx, info) {
        global.dogs = global.dogs || [];
        const newDog = {name: args.name};
        global.dogs.push(newDog);
        return newDog;
    }*/
};

module.exports = mutations;