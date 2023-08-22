/**
 * 该模块用于处理请求,并返回数据,具体用于router分发路由之后调用这里的处理函数
 */
const jwt = require('jsonwebtoken')

const UserService = require('../services/user.service.js');

const {JWT_SECRET} = require('../config/config.default.js');

class UserController {
    async register(ctx, next) {
        // 1. 获取数据
        const data = ctx.request.body;
        // console.log(data, 'data');
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

            console.log(ctx.body, 'bodybody');
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
    async login(ctx, next) {
        const user_name = ctx.request.body.user_name;

        try {
            const {password, ...userInfo} = await UserService.readUser(user_name);
            ctx.body = {
                status: 200,
                code: '12000',
                data: {
                    token: jwt.sign(userInfo, JWT_SECRET, {
                        expiresIn: '1d',
                        // algorithm: 'RS256'
                    })
                }
            }

        } catch (error) {
            console.error('login fail', error);
            ctx.body = {
                status: 200,
                code: '12001',
                data: 'server error'
            }
        }

        await next();
    }

    async updatePassword(ctx, next) {
        try {
            const id = ctx.state.user.id;
            const password = ctx.request.body.password;
            const res = await UserService.updateUser({id, password});
            if (res) {
                ctx.body = {
                    status: 200,
                    code: '200',
                    data: {
                        msg: '更改成功'
                    }
                };
            } else {
                ctx.body = {
                    status: 200,
                    code: '200',
                    data: {
                        msg: '更改失败'
                    }
                };
            }
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new UserController();