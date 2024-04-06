import Router from 'express-promise-router';

import { db } from '~/db';
import { QueryResult, sql } from 'kysely';
import { count } from 'console';

export const adminRouter = Router();

adminRouter.get('/products', async (req, res) => {
	const result = await db
		.selectFrom('product_variant')
		.leftJoin('product', 'product.id', 'product_variant.product_id')
		.select([
			'product_variant.product_id',
			'product_variant.name as variant_name',
			'product_variant.img',
			'product_variant.stock',
			'product_variant.data',
			'product_variant.available',
			'product_variant.last_updated',
			'product.price',
			'product.name',
		])
		.execute();
	res.json(result);
});

adminRouter.get('/orders', async (req, res) => {
	const paymentsGrouped: QueryResult<any> =
		await sql`SELECT t1.* FROM payment t1 JOIN (SELECT order_id, MAX(date) date FROM payment GROUP BY order_id) t2 ON t1.order_id = t2.order_id AND t1.date = t2.date`.execute(
			db,
		);

	const order_lines = await db
		.selectFrom('order_line')
		.select(['order_line.id', 'order_line.order_id', 'order_line.price'])
		.execute();

	const orders = await db
		.selectFrom('order')
		.select([
			'order.id',
			'order.date',
			'order.user_id',
			'order.name',
			'order.status',
			'order.reference',
		])
		.execute();

	const result = [];

	orders.map((order) => {
		const payment = paymentsGrouped.rows.find(
			(payment) => payment.order_id === order.id,
		);
		const total_price = order_lines
			.filter((ol) => ol.order_id === order.id)
			.reduce((a, b) => a + b.price, 0);
		result.push({
			...order,
			payment_status: payment?.status,
			total_price: total_price,
		});
	});

	res.json(result);
});

adminRouter.get('/customers', async (req, res) => {
	const result = await db
		.with('orders_number', (db) =>
			db
				.selectFrom('order')
				.select((eb) => eb.fn.count('reference').as('number_of_orders'))
				.select('user_id')
				.groupBy('user_id'),
		)
		.selectFrom('user')
		.leftJoin('orders_number', 'user_id', 'user.id')
		.where('user.is_admin', '=', false)
		.select(['id', 'email', 'number_of_orders'])
		.select(sql`concat(first_name, ' ', last_name)`.as('name'))
		.execute();

	res.json(result);
});
