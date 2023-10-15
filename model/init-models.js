const DataTypes = require("sequelize").DataTypes;
const _ums_admin = require("./ums_admin");
const _ums_admin_role_relation = require("./ums_admin_role_relation");
const _ums_menu = require("./ums_menu");
const _ums_role = require("./ums_role");
const _ums_role_menu_relation = require("./ums_role_menu_relation");

function initModels(sequelize) {
  const ums_admin = _ums_admin(sequelize, DataTypes);
  const ums_admin_role_relation = _ums_admin_role_relation(sequelize, DataTypes);
  const ums_menu = _ums_menu(sequelize, DataTypes);
  const ums_role = _ums_role(sequelize, DataTypes);
  const ums_role_menu_relation = _ums_role_menu_relation(sequelize, DataTypes);


  return {
    ums_admin,
    ums_admin_role_relation,
    ums_menu,
    ums_role,
    ums_role_menu_relation,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
