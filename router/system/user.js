import express from 'express';
import { getUserPageList } from '../../services/system/userService';

const userRouter = express.Router();
userRouter.get('/user/page', getUserPageList);

export default userRouter;
