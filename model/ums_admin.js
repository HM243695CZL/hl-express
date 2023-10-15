const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_admin', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "用户名称"
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "密码"
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1: 男  2：女"
    },
    wx_open_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "wxopenid"
    },
    last_login_ip: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "最近一次登录IP"
    },
    last_login_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最近一次登录时间"
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "头像地址"
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "逻辑删除"
    }
  }, {
    sequelize,
    tableName: 'ums_admin',
    timestamps: true,
    createdAt: 'add_time',
    updatedAt: 'update_time',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
