/**
 * 错误处理中间件
 */
const util = require('util');
module.exports = () => {
    return (err, req, res, next) => {
        if (err) {
            res.json({
                status: 500,
                msg: util.format(err)
            })
        }
        next();
    };
}
