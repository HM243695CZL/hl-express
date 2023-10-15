const {successPageResult, successResult, errorResult, commonMessage} = require('./index');
const dayjs = require('dayjs');
const { createLogInfo } = require('./logConfig');
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
        let logStr = `
===========分页查询===========
地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')} 
请求参数：${JSON.stringify(req.body)}
响应数据：${JSON.stringify(resData)}
=============================
        `;
        createLogInfo(logStr);
        res.json(resData);
    });
};

/**
 * 获取全部数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 */
const list = ({req, res, model}) => {
    model.findAll().then(result => {
        let resData = successResult(result);
        let logStr = `
===========获取全部数据===========
地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}
请求参数：${JSON.stringify(req.params)}
响应数据：${JSON.stringify(resData)}
=============================
        `;
        createLogInfo(logStr);
        res.json(resData);
    });
}

/**
 * 创建数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param createField 创建字段
 */
const create = ({req, res, model, createField}) => {
    model.create(createField).then(() => {
        let resData = successResult(null, commonMessage.createSuccess);
        let logStr = `
===========创建数据===========
地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')} 
请求参数：${JSON.stringify(req.body)}
响应数据：${JSON.stringify(resData)}
=============================
        `;
        createLogInfo(logStr);
        res.json(resData);
    }).catch(err => {
        let errData = errorResult(err.errors[0].message);
        let logStr = `
===========创建数据-失败========
地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')} 
请求参数：${JSON.stringify(req.body)}
响应数据：${JSON.stringify(errData)}
=============================
        `;
            createLogInfo(logStr);
            res.json(errData);
        });
}

/**
 * 更新数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 * @param updateField 更新字段
 */
const update = ({req, res, model, updateField}) => {
    model.update(updateField, {
        where: {
            id: updateField.id
        }
    }).then(async result => {
        let logStr = `
===========更新数据========
地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}
请求参数：${JSON.stringify(req.body)}`;
        let resData = successResult(null, commonMessage.updateSuccess);
        if (result[0] === 0) {
            resData = errorResult(commonMessage.notExist);
            createLogInfo(logStr + `
响应数据：${JSON.stringify(resData)}
=============================
        `);
            res.json(resData);
            return;
        }
        const getOne = await model.findByPk(updateField.id);
        if (getOne === null) {
            resData = errorResult(commonMessage.notExist);
        }
        logStr += `
响应数据：${JSON.stringify(resData)}
=============================
        `;
        createLogInfo(logStr);
        res.json(resData);
    });
}

/**
 * 查看数据
 * @param req 请求
 * @param res 响应
 * @param model 模型
 */
const view = ({req, res, model}) => {
    model.findByPk(req.params.id).then(result => {
        let resData = successResult(result);
        let logStr = '';
        if (result === null) {
            resData = errorResult(commonMessage.notExist);
            logStr = `
===========查看数据-失败========
地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}
请求参数：${JSON.stringify(req.params)}
响应数据：${JSON.stringify(resData)}
=============================
        `;
        } else {
            logStr = `
===========查看数据===========
地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}
请求参数：${JSON.stringify(req.params)}
响应数据：${JSON.stringify(resData)}
=============================
        `;
        }
        createLogInfo(logStr);
        res.json(resData);
    });
}
module.exports = {
    page,
    list,
    create,
    update,
    view
}
