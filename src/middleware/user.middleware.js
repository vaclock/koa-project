var bcrypt = require('bcryptjs');

const UserService = require('../services/user.service.js');
const {paramsLose, userAlreadyExistsError} = require('../constant/err.type.js');

const userValidator = (user_name, password) => {
    // 参数是否为空的教研
    return !!user_name && !!password;
};


// 1. 验证参数是否为空 2. 验证表中是否已存在
const verifyUser = async (ctx, next) => {
    const {user_name, password, is_admin} = ctx.request.body;
    if (userValidator(user_name, password)) {
        const user = await UserService.readUser(user_name, password, is_admin);
        if (user) {
            ctx.app.emit('error', userAlreadyExistsError, ctx);
            ctx.body = userAlreadyExistsError;
            return;
        }
        !user && await next();
    } else{
        ctx.body = paramsLose;
        ctx.app.emit('error', paramsLose, ctx);
        return;
    }
}

const cryptPassword = async (ctx, next) => {
    
    const {password} = ctx.request.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    ctx.request.body.password = hash;

    await next();
}


module.exports = {
    userValidator,
    verifyUser,
    cryptPassword
}