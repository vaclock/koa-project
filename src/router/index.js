const Router = require('koa-router');
const router = new Router();

const fs = require('fs');

fs.readdir(__dirname, (err, dirs) => {
    dirs.map(file => {
        if (file !== 'index.js') {
            const cur = require('./' + file);
            router.use(cur.routes);
        }
    })
});

module.exports = router;