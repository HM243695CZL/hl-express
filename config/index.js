const config = {
    dbHost: 'localhost', // 数据库地址
    port: 3000, // 服务器端口
    swaggerTitle: 'hl后台管理系统接口文档', // swagger文档标题
    swaggerVersion: '1.0.0', // swagger文档版本
    initPassword: '123456',
    databaseName: 'hl-tiny',
    dbPort: 3306,
    dbUser: 'root',
    dbPassword: 'root',
}
const commonMessage = {
    success: '操作成功',
    error: '操作失败',
    notExist: '数据不存在',
    createSuccess: '创建成功',
    updateSuccess: '更新成功',
    deleteSuccess: '删除成功',
}
/**
 * 返回分页数据
 * @param list 分页数据
 * @param total 总数
 * @returns {{data: {total, list}, message: string, status: number}}
 */
const successPageResult = ({rows, count}) => {
    return {
        status: 200,
        message: '操作成功',
        data: {
            list: rows,
            total: count
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
    errorResult,
    commonMessage
};
