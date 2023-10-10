import express from 'express';
import {getUserList, getUserPageList, login} from '../../services/system/adminService';

const userRouter = express.Router();
const basePath = '/admin/admin/';

userRouter.post(`${basePath}login`, login);
userRouter.post(`${basePath}page`, getUserPageList);
userRouter.get(`${basePath}list`, getUserList);

export default userRouter;
