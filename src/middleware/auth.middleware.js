const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/config.default');
const {
    tokenExpiredError,
    tokenNotCorrect,
    tokenMayErrors,
    isNotAdmin
} = require('../constant/err.type');

/**
 * 校验token是否过期
 */
const auth = async (ctx, next) => {
    const {authorization} = ctx.request.header;

    try {
        const token = authorization.replace('Bearer ', '');
        const user = jwt.verify(token, JWT_SECRET);
        ctx.state.user = user.dataValues;
        await next();
    } catch (error) {
        console.log(error, '123error');
        switch (error) {
            case 'JsonWebTokenError':
                ctx.app.emit('error', tokenNotCorrect, ctx);
                break;
            case 'TokenExpiredError':
                ctx.app.emit('error', tokenExpiredError, ctx);
                break;
            default:
                ctx.app.emit('error', tokenExpiredError, ctx);
        }
    }
}


const isAdmin = async (ctx, next) => {
    const {is_admin} = ctx.state.user;

    if (!is_admin) {
        ctx.app.emit('error', isNotAdmin, ctx);
        return;
    }

    await next();
};


module.exports = {
    auth,
    isAdmin
}