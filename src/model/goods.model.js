const {DataTypes} = require('sequelize');
const sequelize = require('../db/seq');

const Goods = sequelize.define('test_goods', {
    goods_name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品名称',
    },
    goods_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        comment: '商品价格',
    },
    goods_desc: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品描述',
    },
    goods_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品库存',
    },
    goods_image: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品图片',
    }
},{
    paranoid: true,
})

// Goods.sync({force: true});

module.exports = Goods;
