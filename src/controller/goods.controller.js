const path = require('path');

const {
    unSupportedFileType,
    fileUploadError,
} = require('../constant/err.type');

class GoodsController {
    async upload(ctx, next) {
        const { goods_img } = ctx.request.files
        try {
            const { mimetype, filepath } = goods_img;
            const fileTypes = ['image/jpeg', 'image/png'];
            if (!fileTypes.includes(mimetype)) {
                return ctx.app.emit('error', unSupportedFileType, ctx);
            }
            ctx.body = {
                code: 0,
                message: '商品图片上传成功',
                result: {
                    goods_img: path.basename(filepath)
                }
            };
        } catch (error) {
            return ctx.app.emit('error', fileUploadError, ctx);
        }
    }
}

module.exports = new GoodsController();
