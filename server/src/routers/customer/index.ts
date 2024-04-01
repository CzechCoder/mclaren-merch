import Router from 'express-promise-router';

import { productsData } from '~/data/productsData';
import { db } from '~/db';

export const customerRouter = Router();

customerRouter.get('/products', async (req, res) => {
	const category = req.query.category;
	let result;
	if (category === 'new') {
		result = productsData().slice(0, 6);
	} else if (category === 'bestsellers') {
		result = productsData().reverse();
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
