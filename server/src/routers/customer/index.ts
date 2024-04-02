import Router from 'express-promise-router';

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

customerRouter.get('/products/:product_id', async (req, res) => {
	const product_slug = req.params.product_id;

	const productData = await db
		.selectFrom('product')
		.select([
			'product.cost',
			'product.description',
			'product.details',
			'product.id',
			'product.name',
			'product.slug',
		])
		.where('slug', '=', product_slug)
		.execute();

	const variantData = await db
		.selectFrom('product_variant')
		.select([
			'product_variant.data',
			'product_variant.slug',
			'product_variant.img',
			'product_variant.name',
			'product_variant.product_id',
		])
		.leftJoin('product', 'product.id', 'product_variant.product_id')
		.where('product_id', '=', productData[0].id)
		.execute();

	const result = {
		...productData[0],
		variants: [...variantData],
	};

	res.json(result);
});
