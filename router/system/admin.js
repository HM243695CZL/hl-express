const express = require('express');
const { createUser, getUserList, getUserPageList, login } = require('../../services/system/adminService');

const userRouter = express.Router();
const basePath = '/admin/admin/';

userRouter.post(`${basePath}login`, login);
userRouter.post(`${basePath}page`, getUserPageList);
userRouter.post(`${basePath}create`, createUser);
userRouter.get(`${basePath}list`, getUserList);

module.exports = userRouter;
