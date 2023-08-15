var bcrypt = require('bcryptjs');

const UserService = require('../services/user.service.js');
const {paramsLose, userAlreadyExistsError, passwordError} = require('../constant/err.type.js');

const userValidator = async (ctx, next) => {
    const {user_name, password} = ctx.request.body;
    // 参数是否为空的教研
    if (!user_name) {
        const errorInfo = paramsLose('user_name');
        ctx.body = errorInfo;
        ctx.app.emit('error', errorInfo, ctx);
        return;
    } else if(!password) {
        const errorInfo =  paramsLose('password');
        ctx.body = errorInfo;
        ctx.app.emit('error', errorInfo, ctx);
        return;
    }

    console.log('ok,运行');

    await next();
};


// 1. 验证参数是否为空 2. 验证表中是否已存在
const verifyUser = async (ctx, next) => {
    const {user_name, password, is_admin} = ctx.request.body;
    const user = await UserService.readUser(user_name, password, is_admin);
    if (user) {
        ctx.app.emit('error', userAlreadyExistsError, ctx);
        ctx.body = userAlreadyExistsError;
        return;
    }
    !user && await next();
}

const cryptPassword = async (ctx, next) => {
    
    const {password} = ctx.request.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    ctx.request.body.password = hash;

    await next();
}


const verifyLogin = async (ctx, next) => {
    const {user_name, password} = ctx.request.body;

    const user = await UserService.readUser(user_name);
    console.log(user, 'user');
    // ctx.body = user;
    if (!bcrypt.compareSync(password, user.password)) {
        ctx.body = passwordError;
    } else {
        await next();
    }
}

module.exports = {
    userValidator,
    verifyUser,
    verifyLogin,
    cryptPassword
}