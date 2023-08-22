const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/config.default');
const {tokenExpiredError, tokenNotCorrect} = require('../constant/err.type');

/**
 * 校验token是否过期
 */
const auth = async (ctx, next) => {
    const {authorization} = ctx.request.header;

    const token = authorization.replace('Bearer ', '');

    try {
        const user = jwt.verify(token, JWT_SECRET);
        ctx.state.user = user.dataValues;
    } catch (error) {
        switch (error) {
            case 'JsonWebTokenError':
                ctx.body = tokenNotCorrect;
                ctx.app.emit('error', tokenNotCorrect);
                break;
            case 'TokenExpiredError':
                ctx.body = tokenExpiredError;
                ctx.app.emit('error', tokenExpiredError);
                break;
        }
    }

    await next();
}



module.exports = {
    auth,
}