const {successResult, errorResult, commonMessage} = require('../../config');
const {toTreeData} = require('../../utils');
const list = ({ res, model}) => {
    model.findAll().then(result => {
        const data = toTreeData(JSON.parse(JSON.stringify(result)));
        res.json(successResult(data));
    })
};
const remove = async ({req, res, model}) => {
    try {
        // 判断是否有子节点
        const result = await model.findAll({
            where: {
                pid: req.params.id
            }
        });
        if (result.length) {
            throw new Error('请先删除子节点');
        }
        const data = await model.findByPk(req.params.id);
        if (data === null) {
            throw new Error(commonMessage.notExist);
        }
        model.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(successResult(null, commonMessage.deleteSuccess));
    } catch (err) {
        res.json(errorResult(err.message));
    }
}
module.exports = {
    list,
    remove
}
