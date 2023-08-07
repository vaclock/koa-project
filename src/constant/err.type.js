module.exports = {
    paramsLose: {
        status: 500,
        body: {
            status: 'error',
            code: 12499,
            msg: 'params lose'
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
    }
}