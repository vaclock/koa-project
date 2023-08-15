module.exports = {
    paramsLose: (params) => {
        return {
            status: 500,
            body: {
                status: 'error',
                code: 12499,
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
            code: 12500,
            msg: 'user already exists'
        }
    },


    passwordError: {
        status: 500,
        body: {
            status: 'error',
            code: 12001,
            msg: 'password is not correct'
        }
    }
}