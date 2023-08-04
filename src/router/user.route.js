const Router = require('koa-router');

const userController = require('../controller/user.controller');

let router = new Router({
    prefix: '/users'
});

router.get('/', (ctx, next) => {
    console.log(ctx.request.body)
    // ctx.body = "Hello users";
    ctx.body = `ctx.request.body: ${ctx.request.body}`
});

router.post('/register', userController.register);

module.exports = router;
