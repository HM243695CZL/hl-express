import express from 'express';
import { getRolePageList } from '../../services/system/roleService';

const roleRouter = express.Router();

roleRouter.get('/role/page', getRolePageList);
export default roleRouter;
