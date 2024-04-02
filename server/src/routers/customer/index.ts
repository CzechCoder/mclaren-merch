import Router from 'express-promise-router';

import { productsData } from '~/data/productsData';
import { db } from '~/db';

export const customerRouter = Router();

customerRouter.get('/products', async (req, res) => {
	const category = req.query.category;
	let result;
	if (category === 'new') {
		result = await db.selectFrom('product').selectAll().limit(6).execute();
	} else if (category === 'bestsellers') {
		result = await db
			.selectFrom('product')
			.selectAll()
			.orderBy('id desc')
			.limit(6)
			.execute();
	}
	res.json(result);
});

customerRouter.get('/product', async (req, res) => {
	const product_id = req.query.product_id;
	const result = productsData().find(
		(product) => product.id === Number(product_id),
	);
	res.json(result);
});
