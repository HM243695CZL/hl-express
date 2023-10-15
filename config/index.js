const config = {
    dbHost: 'http://localhost', // 数据库地址
    port: 3000, // 服务器端口
    swaggerTitle: 'hl后台管理系统接口文档', // swagger文档标题
    swaggerVersion: '1.0.0', // swagger文档版本
    initPassword: '123456'
}
/**
 * 返回分页数据
 * @param list 分页数据
 * @param total 总数
 * @returns {{data: {total, list}, message: string, status: number}}
 */
const successPageResult = (list, total) => {
    return {
        status: 200,
        message: '操作成功',
        data: {
            list,
            total
        }
    }
};
const successResult = (data, message = '操作成功') => {
    return {
        status: 200,
        message,
        data
    }
}
const errorResult = (message) => {
    return {
        status: 500,
        message,
        data: null
    }
}
module.exports = {
    config,
    successPageResult,
    successResult,
    errorResult
};
