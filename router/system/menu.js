const express = require('express');
const {models} = require('../../config/sequelizeConfig');
const {create, update, view } = require('../../config/dbConfig');
const {list, remove} = require('../../services/system/menuService');

const menuRouter = express.Router();
const basePath = '/admin/menu/';

menuRouter.get(`${basePath}list`,
    (req, res) => list({res, model: models.ums_menu}));
menuRouter.post(`${basePath}create`,
    (req, res, next) => create({
        res,
        model: models.ums_menu,
        createField: req.body
    }));
menuRouter.post(`${basePath}update`,
    (req, res) => update({
        res,
        model: models.ums_menu,
        updateField: req.body
    }));
menuRouter.get(`${basePath}view/:id`,
    (req, res) => view({req, res, model: models.ums_menu}));
menuRouter.get(`${basePath}delete/:id`,
    (req, res) => remove({req, res, model: models.ums_menu}));

module.exports = menuRouter;
