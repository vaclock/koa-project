const Koa = require('koa');
const { koaBody } = require('koa-body');

const errorHandler = require('./errorHandler');

const app = new Koa();
const userRouter = require('../router/user.route');
console.log(userRouter, 'userRouter');

app.use(koaBody());
app.use(userRouter.routes());

app.on('error', errorHandler);

module.exports = app;