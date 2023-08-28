
class GoodsController {
    async upload(ctx, next) {
        // const { file } = ctx.request.files
        ctx.body = ctx.request.files;
    }
}

module.exports = new GoodsController();
