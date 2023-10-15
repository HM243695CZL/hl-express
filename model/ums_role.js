const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_role', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "名称"
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "角色key"
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "角色描述"
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "是否启用"
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "逻辑删除"
    }
  }, {
    sequelize,
    tableName: 'ums_role',
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
