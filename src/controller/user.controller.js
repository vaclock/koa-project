/**
 * 该模块用于处理请求,并返回数据,具体用于router分发路由之后调用这里的处理函数
 */
const UserService = require('../services/user.service.js');
console.log(UserService.createUser, 'UserService');

class UserController {
    async register(ctx, next) {
        // 1. 获取数据
        const data = ctx.request.body;
        console.log(data, 'data');
        const {user_name, password, is_admin} = data;
        try {
            // 2. 操作数据库
            const res = await UserService.createUser(user_name, password, is_admin);
            // 3. 返回数据
            ctx.body = {
                status: 200,
                code: '12000',
                data: {
                    user_name: res.user_name
                }
            };
        } catch (error) {
            console.log(error, 'error');
            ctx.body = {
                status: 500,
                code: '5000',
                data: error
            }
        };
       
        next();
    }
    async login() {

    }
}

module.exports = new UserController();