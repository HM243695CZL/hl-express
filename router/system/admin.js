const express = require('express');
const { models } = require('../../config/sequelizeConfig');
const {page, list, create, view} = require('../../config/dbConfig');
const {login } = require('../../services/system/adminService');
const {config} = require('../../config');

const userRouter = express.Router();
const basePath = '/admin/admin/';

userRouter.post(`${basePath}login`, login);
userRouter.post(`${basePath}page`,
    (req, res) => page({req, res, model: models.ums_admin}));
userRouter.get(`${basePath}list`,
    (req, res) => list({req, res, model: models.ums_admin}));
userRouter.post(`${basePath}create`,
    (req, res) => create({
        req,
        res,
        model: models.ums_admin,
        createField: {
            username: req.body.username,
            password: config.initPassword,
            avatar: req.body.avatar,
            sex: req.body.sex
        }
    }));
userRouter.get(`${basePath}view/:id`,
    (req, res) => view({req, res, model: models.ums_admin}));
module.exports = userRouter;
