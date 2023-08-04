/**
 * 该模块主要用于创建数据库连接，并返回ORM对象，可以用于service模块CRUD 数据库表
 */
// MYSQL_HOST=62.234.46.103
// MYSQL_PORT=3306
// MYSQL_USER=root
// MYSQL_PASSWORD=123123
// MYSQL_DB=testsql

const { Sequelize } = require('sequelize');
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DB
} = require('../config/config.default');

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
});

sequelize
    .authenticate()
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(err => {
        console.log(err);
    });

module.exports = sequelize;





