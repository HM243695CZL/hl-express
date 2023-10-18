const {successResult} = require('../../config');
const {toTreeData} = require('../../utils');
const list = ({ res, model}) => {
    model.findAll().then(result => {
        const data = toTreeData(JSON.parse(JSON.stringify(result)));
        res.json(successResult(data));
    })
};
const remove = ({req, res, model}) => {

}
module.exports = {
    list,
    remove
}
