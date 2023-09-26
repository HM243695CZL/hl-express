import express from 'express';
import {getUserPageList} from '../../services/system/userService';

const userRouter = express.Router();

userRouter.post('/user/page', getUserPageList);
userRouter.get('/user/list', (req, res) => {
    res.send('page/list');
});

export default userRouter;
