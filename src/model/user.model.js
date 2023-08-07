const { DataTypes } = require('sequelize');

const sequelize = require('../db/seq');

const User = sequelize.define('test_user', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
});

// User.sync({force: true});

module.exports = User;