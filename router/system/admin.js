const express = require('express');
const { getUserList, getUserPageList, login } = require('../../services/system/adminService');

const userRouter = express.Router();
const basePath = '/admin/admin/';

userRouter.post(`${basePath}login`, login);
userRouter.post(`${basePath}page`, getUserPageList);
userRouter.get(`${basePath}list`, getUserList);

module.exports = userRouter;
