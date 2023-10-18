const express = require('express');
const {models} = require('../../config/sequelizeConfig');
const { page , list, create, update, view, remove} = require('../../config/dbConfig');

const roleRouter = express.Router();
const basePath = '/admin/role/';

roleRouter.post(`${basePath}page`,
    (req, res) => page({req, res, model: models.ums_role}));
roleRouter.get(`${basePath}list`,
    (req, res) => list({res, model: models.ums_role}));
roleRouter.post(`${basePath}create`,
    (req, res) => create({
        res,
        model: models.ums_role,
        createField: {
            name: req.body.name,
            key: req.body.key,
            desc: req.body.desc
        },
    }));
roleRouter.post(`${basePath}update`,
    (req, res) => update({
        res,
        model: models.ums_role,
        updateField: {
            id: req.body.id,
            name: req.body.name,
            key: req.body.key,
            desc: req.body.desc
        },
    }));
roleRouter.get(`${basePath}view/:id`,
    (req, res) => view({req, res, model: models.ums_role}));
roleRouter.get(`${basePath}delete/:id`,
    (req, res) => remove({req, res, model: models.ums_role}));
module.exports = roleRouter;
