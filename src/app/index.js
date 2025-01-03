const Koa = require('koa');
const path = require('path');
const { koaBody } = require('koa-body');
const KoaStatic = require('koa-static')
const parameter = require('koa-parameter')

const errorHandler = require('./errorHandler');

const app = new Koa();

const router = require('../router/index');

app.use(KoaStatic(path.join(__dirname, '../upload')));


app.use(koaBody({
        multipart: true,
        formidable: {
          // 在配制选项option里, 不推荐使用相对路径
          // 在option里的相对路径, 不是相对的当前文件. 相对process.cwd()
          uploadDir: path.join(__dirname, '../upload/goods_images'),
          keepExtensions: true,
        },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
}));

app.use(router.routes()).use(router.allowedMethods());
app.use(parameter(app))

app.on('error', errorHandler);

module.exports = app;