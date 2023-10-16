const Router = require('koa-router');
const router = new Router();

const fs = require('fs');

fs.readdirSync(__dirname).forEach(file => {
    if (file !== 'index.js') {
      let r = require('./' + file)
      if (r.routes) {
        router.use(r.routes())
      }
    }
})

module.exports = router;