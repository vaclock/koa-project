const goodsController = require('../controller/goods.controller');
const Router = require('koa-router');

const {
    isAdmin,
    auth,
} = require('../middleware');


let router = new Router({
    prefix: '/goods'
});

/**
 * 发布商品
 */
router.post('/', auth, isAdmin, goodsController.upload)

/**
 * 上传商品图片
 */
router.post('/upload', auth, isAdmin, goodsController.upload)


/**
 * 修改商品
 */


/**
 * 删除商品
 */


/**
 * 查询商品
 */
module.exports = router;