const goodsController = require('../controller/goods.controller');
const Router = require('koa-router');

let router = new Router({
    prefix: '/goods'
});

router.get('/upload', goodsController.upload)

module.exports = router;