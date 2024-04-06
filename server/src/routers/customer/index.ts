import Router from 'express-promise-router';

import { db } from '~/db';

export const customerRouter = Router();

customerRouter.get('/products', async (req, res) => {
	const category = req.query.category;
	let result;
	if (category === 'new') {
		result = await db
			.with('available_variants', (db) =>
				db
					.selectFrom('product_variant')
					.select('product_id')
					.where('available', '=', true)
					.groupBy('product_id'),
			)
			.selectFrom('product')
			.leftJoin(
				'available_variants',
				'available_variants.product_id',
				'product.id',
			)
			.select(['img', 'name', 'price', 'slug'])
			.where('product_id', 'is not', null)
			.orderBy('id asc')
			.limit(6)
			.execute();
	} else if (category === 'bestsellers') {
		result = await db
			.with('available_variants', (db) =>
				db
					.selectFrom('product_variant')
					.select('product_id')
					.where('available', '=', true)
					.groupBy('product_id'),
			)
			.selectFrom('product')
			.leftJoin(
				'available_variants',
				'available_variants.product_id',
				'product.id',
			)
			.select(['img', 'name', 'price', 'slug'])
			.where('product_id', 'is not', null)
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
			'product.description',
			'product.details',
			'product.id',
			'product.name',
			'product.apparel',
			'product.slug',
			'product.price',
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
			'product_variant.stock',
		])
		.leftJoin('product', 'product.id', 'product_variant.product_id')
		.where('product_id', '=', productData[0].id)
		.where('available', '=', true)
		.orderBy('product_variant.id asc')
		.execute();

	const result = {
		...productData[0],
		variants: [...variantData],
	};

	res.json(result);
});
