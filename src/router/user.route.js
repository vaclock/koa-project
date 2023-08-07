const Router = require('koa-router');
const userController = require('../controller/user.controller');

const {verifyUser, cryptPassword} = require('../middleware/user.middleware.js');


let router = new Router({
    prefix: '/users'
});

router.get('/', (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = `ctx.request.body: ${ctx.request.body}`
});

router.post('/register', verifyUser, cryptPassword, userController.register);

module.exports = router;
