/**
 * 创建用户模型
 */
const { DataTypes } = require('sequelize');
const { sequelizeConfig } = require('../../config/sequelizeConfig');
const AdminModel = sequelizeConfig.define('ums_admin', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名称',
        validate: {
            notEmpty: {
                msg: '用户名不能为空'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密码',
    },
    sex: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '性别 1：男 2：女',
    },
    wx_open_id: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '微信openid',
    },
    last_login_ip: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '最后登录ip',
    },
    last_login_time: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: '最后登录时间',
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '头像',
    },
    add_time: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: '创建时间',
    },
    update_time: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: '更新时间',
    },
    deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '逻辑删除 1(true)已删除， 0(false)未删除',
    }
});
module.exports = AdminModel;
