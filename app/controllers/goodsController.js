/**
 * Goods Controller
 * @module controllers/goodsController
 */
'use strict';

const myDb = require('../managers/memcachedDbManager');

module.exports = {

    /** Get value by id */
    getId: async function (ctx, next) {
        try {
            ctx.body = await myDb.getById(ctx.params.id);
            ctx.status = ctx.body ? 200 : 404;
        } catch (err) {
            ctx.status = 500;
        }
        await next();
    },

    /** Add new record to memory DB */
    createItem: async function (ctx, next) {
        try {
            ctx.body = await myDb.setNewId(ctx.request.rawBody);
            ctx.status = 201;
        } catch (err) {
            ctx.body = 400;
        }

        await next();
    },

    /** Remove record from memory DB */
    removeItem: async function (ctx, next) {
        try {
            let isRemove = await myDb.removeId(ctx.params.id);
            ctx.status = isRemove ? 204 : 404;
        } catch (err) {
            ctx.status = 500;
        }
        await next();
    }
};
