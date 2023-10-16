const express = require('express');
const bcrypt = require('bcryptjs');
const {models} = require('../../config/sequelizeConfig');
const {page, list, create, update, view, remove} = require('../../config/dbConfig');
const {login} = require('../../services/system/adminService');
const {config} = require('../../config');

const userRouter = express.Router();
const basePath = '/admin/admin/';
const modelName = '用户';

userRouter.post(`${basePath}login`, login);
userRouter.post(`${basePath}page`,
    (req, res) => page({req, res, model: models.ums_admin, modelName}));
userRouter.get(`${basePath}list`,
    (req, res) => list({req, res, model: models.ums_admin, modelName}));
userRouter.post(`${basePath}create`,
    (req, res) => {
        bcrypt.hash(config.initPassword, config.salt, (err, password) => {
            create({
                req,
                res,
                model: models.ums_admin,
                createField: {
                    username: req.body.username,
                    password,
                    avatar: req.body.avatar,
                    sex: req.body.sex
                },
                modelName
            });
        });
    });
userRouter.post(`${basePath}update`,
    (req, res) => update({
        req,
        res,
        model: models.ums_admin,
        updateField: {
            id: req.body.id,
            username: req.body.username,
            avatar: req.body.avatar,
            sex: req.body.sex
        },
        modelName
    }));
userRouter.get(`${basePath}view/:id`,
    (req, res) => view({req, res, model: models.ums_admin, modelName}));
userRouter.get(`${basePath}delete/:id`,
    (req, res) => remove({req, res, model: models.ums_admin, modelName}));
userRouter.post(`${basePath}updatePass`,
    (req, res) => {
        bcrypt.hash(req.body.password, config.salt, (err, password) => {
            update({
                req,
                res,
                model: models.ums_admin,
                updateField: {
                    id: req.body.id,
                    password
                },
                modelName
            });
        });
    });
module.exports = userRouter;
