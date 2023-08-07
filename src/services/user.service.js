/**
 * service层主要用于处理数据库
 */
const User = require('../model/user.model.js');

class UserService {
    async createUser(user_name, password, is_admin = false) {
        try {
            const res = await User.create({
                user_name,
                password,
                is_admin
            });
            console.log('创建之后的res:', res);
            return res; 
        } catch (error) {
            console.log('数据库错误', error);
            return error;
        }
    }

    async readUser(user_name, password, is_admin = false) {
        const res = await User.findOne({ where: { user_name } });
        return res;
    }

    updateUser(userName, password) {

    }

    deleteUser(userName) {

    }
}

module.exports = new UserService();
