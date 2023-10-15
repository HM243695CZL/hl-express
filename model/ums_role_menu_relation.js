const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_role_menu_relation', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "角色ID"
    },
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "菜单ID"
    }
  }, {
    sequelize,
    tableName: 'ums_role_menu_relation',
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
