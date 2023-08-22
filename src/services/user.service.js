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

    async updateUser({id, user_name, password, is_admin}) {
        try {
            // if (!old_user) {
            //     return;
            // }
            let updateUserInfo = {};
            user_name && (updateUserInfo.user_name = user_name);
            password && (updateUserInfo.password = password);
            is_admin && (updateUserInfo.is_admin = is_admin);
            const res = await User.update(updateUserInfo, {
                where: {
                    id
                }
            });
            return res[0] > 0 ? true : false;
        } catch (error) {
            console.error(error);
        }
    }

    deleteUser(userName) {

    }
}

module.exports = new UserService();
