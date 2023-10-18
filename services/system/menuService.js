const {successResult} = require('../../config');
const list = async ({ req, res, model}) => {
    const menuList = await model.findAll();
    res.json(successResult(menuList));
}
module.exports = {
    list
}
