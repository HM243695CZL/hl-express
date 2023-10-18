const userRouter = require('./system/admin');
const roleRouter = require('./system/role');
const menuRouter = require('./system/menu');

module.exports = [
    userRouter,
    roleRouter,
    menuRouter
]
