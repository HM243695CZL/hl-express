const express = require('express');
const {models} = require('../../config/sequelizeConfig');
const {create, update, view } = require('../../config/dbConfig');
const {list} = require('../../services/system/menuService');

const menuRouter = express.Router();
const basePath = '/admin/menu/';
const modelName = '菜单管理';

menuRouter.get(`${basePath}list`,
    (req, res) => list({req, res, model: models.ums_menu, modelName}));

module.exports = menuRouter;
