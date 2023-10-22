const {successPageResult, successResult, errorResult, commonMessage} = require('./index');
const {emptyToNull} = require('../utils');
/**
 * 分页查询
 * @param req 请求
 * @param res 响应
 * @param model 模型
 */
const page = ({req, res, model}) => {
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
 * @param model 模型
 */
const list = ({res, model}) => {
    model.findAll().then(result => {
        let resData = successResult(result);
        res.json(resData);
    });
}

/**
 * 创建数据
 * @param res 响应
 * @param model 模型
 * @param createField 创建字段
 * @param next 下一步
 */
const create = async ({res, model, createField}) => {
    delete createField.id;
    for (const o in createField) {
        createField[o] = emptyToNull(createField[o])
    }
    try {
        await model.create(createField);
        let resData = successResult(null, commonMessage.createSuccess);
        res.json(resData);
    } catch (err) {
        res.json(errorResult(err.message));
    }
}

/**
 * 更新数据
 * @param res 响应
 * @param model 模型
 * @param updateField 更新字段
 */
const update = async ({res, model, updateField}) => {
    for (const o in updateField) {
        updateField[o] = emptyToNull(updateField[o])
    }
    try {
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
    } catch (err) {
        res.json(errorResult(err.message));
    }
}

/**
 * 查看数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 */
const view = async ({req, res, model}) => {
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
 */
const remove = async ({req, res, model}) => {
    try {
        const result = await model.findByPk(req.params.id);
        if (result.length) {
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
    page,
    list,
    create,
    update,
    view,
    remove
}
