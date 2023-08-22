const Router = require('koa-router');
const userController = require('../controller/user.controller');

const {
    userValidator,
    verifyLogin,
    verifyUser,
    cryptPassword
} = require('../middleware/user.middleware.js');

const {
    auth
} = require('../middleware/auth.middleware.js');


let router = new Router({
    prefix: '/users'
});

router.get('/', (ctx, next) => {
    ctx.body = `ctx.request.body: ${ctx.request.body}`
});

router.post('/register', userValidator, verifyUser, cryptPassword, userController.register);

router.post('/login', userValidator, verifyLogin, userController.login);

router.post('/updatePassword', auth, cryptPassword, userController.updatePassword);

module.exports = router;
