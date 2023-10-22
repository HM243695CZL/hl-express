const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('ums_menu', {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        pid: {
            type: DataTypes.BIGINT,
            allowNull: true,
            comment: "父级ID"
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: "组件名称",
            validate: {
                notNull: {
                    msg: '组件名称不能为空'
                }
            }
        },
        component: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: "组件地址"
        },
        path: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: "菜单地址",
            validate: {
                notNull: {
                    msg: '菜单地址不能为空'
                }
            }
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: true,
            comment: "菜单名称"
        },
        icon: {
            type: DataTypes.STRING(200),
            allowNull: true,
            comment: "菜单图标"
        },
        is_link: {
            type: DataTypes.STRING(255),
            allowNull: true,
            comment: "超链接地址"
        },
        show_link: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            comment: "是否隐藏"
        },
        is_keep_alive: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            comment: "是否缓存组件"
        },
        is_affix: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            comment: "是否固定"
        },
        is_iframe: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            comment: "是否内嵌窗口"
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: "菜单排序"
        }
    }, {
        sequelize,
        tableName: 'ums_menu',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "id"},
                ]
            },
        ]
    });
};
