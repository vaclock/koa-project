const Koa = require('koa');
const { koaBody } = require('koa-body');

const app = new Koa();
const userRouter = require('../router/user.route');
console.log(userRouter, 'userRouter');

app.use(koaBody());
app.use(userRouter.routes());

module.exports = app;