const dayjs = require('dayjs');
const {createLogInfo} = require('../config/logConfig');
/**
 * 全局请求响应中间件
 */
const reqResMiddleware = (req, res, next) => {
    const defaultWrite = res.write;
    const defaultEnd = res.end;
    const chunks = [];
    res.write = (...restArgs) => {
        chunks.push(Buffer.from(restArgs[0]));
        defaultWrite.apply(res, restArgs);
    }
    res.end = (...restArgs) => {
        let mList = ['POST', 'GET'];
        if (mList.indexOf(req.method) !== -1) {
            if (restArgs[0]) {
                chunks.push(Buffer.from(restArgs[0]));
            }
            let body = Buffer.concat(chunks).toString('utf8');
            let logStr = `

地址：${req.url}
请求方式：${req.method}
时间：${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}
请求参数：${req.method === 'POST' ? JSON.stringify(req.body) : JSON.stringify(req.params)}
响应数据：${JSON.stringify(body)}
========================
        `;
            createLogInfo(logStr);
        }
        defaultEnd.apply(res, restArgs);
    }
    next();
}
module.exports = reqResMiddleware;
