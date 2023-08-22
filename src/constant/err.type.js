module.exports = {
    paramsLose: (params) => {
        return {
            status: 500,
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
        status: 500,
        body: {
            status: 'error',
            code: '12500',
            msg: 'user already exists'
        }
    },


    /**
     * 密码不正确
     */
    passwordError: {
        status: 500,
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
        status: 500,
        body: {
            status: 'error',
            code: '12502',
            msg: 'token expired'
        }
    },

    tokenNotCorrect: {
        status: 500,
        body: {
            status: 'error',
            code: '12503',
            msg: 'token is not correct'
        }
    }
}