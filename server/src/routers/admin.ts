import Router from 'express-promise-router';

import { db } from '~/db';

export const adminRouter = Router();

adminRouter.get('/orders', async (req, res) => {
	const result = await db.selectFrom('order').selectAll().execute();
	res.json(result);
});
