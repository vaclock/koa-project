/**
 * 该模块用于处理请求,并返回数据,具体用于router分发路由之后调用这里的处理函数
 */

class UserController {
    async register(ctx, next) {
        // 1. 获取数据
        const data = ctx.request.body;
        console.log(data, 'data');
        // 2. 操作数据库
        ctx.body = ctx.request.body;
        // 3. 返回数据
    }
    async login() {

    }
}

module.exports = new UserController();