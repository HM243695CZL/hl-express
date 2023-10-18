const {successPageResult, successResult, errorResult, commonMessage} = require('./index');
/**
 * 分页查询
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param modelName 模型名称
 */
const page = ({req, res, model, modelName}) => {
    const {pageIndex, pageSize} = req.body;
    model.findAndCountAll({
        limit: pageSize,
        offset: (pageIndex - 1) * pageSize
    }).then(async result => {
        const resData = successPageResult(result);
        res.json(resData);
    });
};

/**
 * 获取全部数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param modelName 模型名称
 */
const list = ({req, res, model, modelName}) => {
    model.findAll().then(result => {
        let resData = successResult(result);
        res.json(resData);
    });
}

/**
 * 创建数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param createField 创建字段
 * @param modelName 模型名称
 */
const create = ({req, res, model, createField, modelName}) => {
    model.create(createField).then(() => {
        let resData = successResult(null, commonMessage.createSuccess);
        res.json(resData);
    }).catch(err => {
        let errData = errorResult(err.errors[0].message);
            res.json(errData);
        });
}

/**
 * 更新数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param updateField 更新字段
 * @param modelName 模型名称
 */
const update = async ({req, res, model, updateField, modelName}) => {
    const result = await model.update(updateField, {
        where: {
            id: updateField.id
        }
    });
    let resData = successResult(null, commonMessage.updateSuccess);
    if (result[0] === 0) {
        resData = errorResult(commonMessage.notExist);
        res.json(resData);
        return;
    }
    const getOne = await model.findByPk(updateField.id);
    if (getOne === null) {
        resData = errorResult(commonMessage.notExist);
    }
    res.json(resData);
}

/**
 * 查看数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param modelName 模型名称
 */
const view = async ({req, res, model, modelName}) => {
    const result = await model.findByPk(req.params.id);
    let resData = successResult(result);
    if (result === null) {
        resData = errorResult(commonMessage.notExist);
    }
    res.json(resData);
}

/**
 * 删除数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param modelName 模型名称
 */
const remove = async ({req, res, model, modelName}) => {
    const result = await model.findByPk(req.params.id);
    let resData = successResult(null, commonMessage.deleteSuccess);
    if (result === null) {
        resData = errorResult(commonMessage.notExist);
    } else {
        model.destroy({
            where: {
                id: req.params.id
            }
        });
    }
    res.json(resData);
}
module.exports = {
    page,
    list,
    create,
    update,
    view,
    remove
}
