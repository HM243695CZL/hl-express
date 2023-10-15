const Sequelize = require('sequelize');
const {createLogInfo} = require('./logConfig');

const sequelizeConfig = new Sequelize('hl-tiny', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', // 数据库类型，这里是mysql
    pool: {
        max: 20, // 最大连接数
        min: 3, // 最小连接数
        idle: 30000, // 连接空置时间（毫秒），超时后将释放连接
    },
    timezone: '+08:00', // 东八时区
    define: {
        timestamps: true, // 不自动添加时间戳
        freezeTableName: true, // 表名不自动为复数
        charset: 'utf8', // 设置字符集
        createdAt: 'add_time', // 创建时间字段
        updatedAt: 'update_time', // 更新时间字段
    },
    logging: sql => createLogInfo(sql), // 打印日志
});

module.exports = {
    sequelizeConfig
}
