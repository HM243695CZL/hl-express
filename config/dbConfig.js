const {successPageResult, successResult, errorResult} = require('./index');
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
    model.findAll({
        limit: pageSize,
        offset: (pageIndex - 1) * pageSize
    }).then(async result => {
        const resData = successPageResult(result, await model.count());
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
        let resData = successResult(null, '创建成功');
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
module.exports = {
    page,
    list,
    create
}
