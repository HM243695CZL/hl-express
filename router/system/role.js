const express = require('express');
const {models} = require('../../config/sequelizeConfig');
const { page , list, create, update, view, remove} = require('../../config/dbConfig');

const roleRouter = express.Router();
const basePath = '/admin/role/';
const modelName = '角色管理';

roleRouter.post(`${basePath}page`,
    (req, res) => page({req, res, model: models.ums_role, modelName}));
roleRouter.get(`${basePath}list`,
    (req, res) => list({req, res, model: models.ums_role, modelName}));
roleRouter.post(`${basePath}create`,
    (req, res) => create({
        req,
        res,
        model: models.ums_role,
        createField: {
            name: req.body.name,
            key: req.body.key,
            desc: req.body.desc
        },
        modelName
    }));
roleRouter.post(`${basePath}update`,
    (req, res) => update({
        req,
        res,
        model: models.ums_role,
        updateField: {
            id: req.body.id,
            name: req.body.name,
            key: req.body.key,
            desc: req.body.desc
        },
        modelName
    }));
roleRouter.get(`${basePath}view/:id`,
    (req, res) => view({req, res, model: models.ums_role, modelName}));
roleRouter.get(`${basePath}delete/:id`,
    (req, res) => remove({req, res, model: models.ums_role, modelName}));
module.exports = roleRouter;
