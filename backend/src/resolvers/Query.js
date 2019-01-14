const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db')
    /*async items(present, args, ctx, infor) {
        const items = await ctx.db.query.items()
        return items
    }*/
};

module.exports = Query;