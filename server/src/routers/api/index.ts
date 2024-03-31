import Router from 'express-promise-router';
import { adminRouter } from '../admin';
import { customerRouter } from '../customer';

export const apiRouter = Router();

apiRouter.use('/admin', adminRouter);

apiRouter.use('/customer', customerRouter);
