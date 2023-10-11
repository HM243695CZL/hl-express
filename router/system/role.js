
const express = require('express');
const { getRolePageList } = require('../../services/system/roleService');

const roleRouter = express.Router();

roleRouter.get('/role/page', getRolePageList);

module.exports = roleRouter;
