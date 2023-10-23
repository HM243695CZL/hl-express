const {models} = require('../../config/sequelizeConfig');
const {successResult, errorResult} = require('../../config');
const roleModal = models.ums_role;
const roleMenuModal = models.ums_role_menu_relation;
const remove = async ({req, res}) => {
    const result = roleModal.destroy({
        where: {
            id: req.params.id
        }
    });
    await roleMenuModal.destroy({
        where: {
            role_id: req.params.id
        }
    });
    res.json(successResult(result));
}
const viewAuth = async ({req, res}) => {
    const result = await roleMenuModal.findAll({
        where: {
            role_id: req.params.id
        }
    });
    res.json(successResult(result.map(item => item.menu_id)));
};
const auth = async ({req, res}) => {
    try {
        // 删除角色对应的所有权限
        const result = await roleMenuModal.destroy({
            where: {
                role_id: req.body.id
            }
        });
        // 重新添加权限
        await roleMenuModal.bulkCreate(req.body.menuIds.map(menuId => {
            return {
                role_id: req.body.id,
                menu_id: menuId
            }
        }));
        res.json(successResult(result));
    } catch (err) {
        res.json(errorResult(err.message));
    }
};
module.exports = {
    remove,
    viewAuth,
    auth
}
