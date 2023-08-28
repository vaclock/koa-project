module.exports = {
    paramsLose: (params) => {
        return {
            status: 204,
            body: {
                status: 'error',
                code: '12499',
                msg: `${params} params lose`
            }
        }
    },
    /**
     * 用户已经存在
     */
    userAlreadyExistsError: {
        status: 204,
        body: {
            status: 'error',
            code: '12204',
            msg: 'user already exists'
        }
    },


    /**
     * 密码不正确
     */
    passwordError: {
        status: 204,
        body: {
            status: 'error',
            code: '12501',
            msg: 'password is not correct'
        }
    },

    /**
     * token已过期
     */
    tokenExpiredError: {
        status: 204,
        body: {
            status: 'error',
            code: '12502',
            msg: 'token expired'
        }
    },

    tokenNotCorrect: {
        status: 204,
        body: {
            status: 'error',
            code: '12503',
            msg: 'token is not correct'
        }
    },

    isNotAdmin: {
        status: 204,
        body: {
            status: 'error',
            code: 'current user is not admin',
        }
    }
}