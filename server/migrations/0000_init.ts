import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('category')
		.addColumn('id', 'bigserial', (col) => col.primaryKey())
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('description', 'text', (col) => col.notNull())
		.execute();

	await db.schema
		.createTable('product')
		.addColumn('id', 'bigserial', (col) => col.primaryKey())
		.addColumn('img', 'text', (col) => col.notNull())
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('apparel', 'boolean', (col) => col.notNull().defaultTo('false'))
		.addColumn('category_id', 'bigint', (col) =>
			col.notNull().references('category.id').onDelete('restrict'),
		)
		.addColumn('description', 'text', (col) => col.notNull())
		.addColumn('details', 'text', (col) => col.notNull())
		.addColumn('price', 'integer', (col) => col.notNull())
		.addColumn('slug', 'text', (col) => col.notNull())
		.execute();

	await db.schema
		.createTable('product_variant')
		.addColumn('id', 'bigserial', (col) => col.primaryKey())
		.addColumn('product_id', 'bigint', (col) =>
			col.notNull().references('product.id').onDelete('restrict'),
		)
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('img', 'text', (col) => col.notNull())
		.addColumn('stock', 'integer', (col) => col.notNull())
		.addColumn('available', 'boolean', (col) => col.notNull())
		.addColumn('last_updated', 'timestamptz', (col) =>
			col.defaultTo(sql`now()`).notNull(),
		)
		.addColumn('data', 'jsonb', (col) => col.notNull())
		.addColumn('slug', 'text', (col) => col.notNull())
		.execute();

	await db.schema
		.createTable('user')
		.addColumn('id', 'bigserial', (col) => col.primaryKey())
		.addColumn('email', 'text', (col) => col.notNull())
		.addColumn('first_name', 'text', (col) => col.notNull())
		.addColumn('last_name', 'text', (col) => col.notNull())
		.addColumn('city', 'text', (col) => col.notNull())
		.addColumn('street', 'text', (col) => col.notNull())
		.addColumn('zip', 'text', (col) => col.notNull())
		.addColumn('phone', 'text', (col) => col.notNull())
		.addColumn('country', 'text', (col) => col.notNull())
		.addColumn('is_admin', 'boolean', (col) => col.defaultTo(false).notNull())
		.execute();

	await db.schema
		.createTable('order')
		.addColumn('id', 'bigserial', (col) => col.primaryKey())
		.addColumn('reference', 'bigserial', (col) => col.notNull())
		.addColumn('user_id', 'bigint', (col) =>
			col.notNull().references('user.id').onDelete('restrict'),
		)
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('city', 'text', (col) => col.notNull())
		.addColumn('street', 'text', (col) => col.notNull())
		.addColumn('zip', 'text', (col) => col.notNull())
		.addColumn('country', 'text', (col) => col.notNull())
		.addColumn('phone', 'text', (col) => col.notNull())
		.addColumn('vat', 'text', (col) => col.defaultTo('').notNull())
		.addColumn('shipping', 'integer', (col) => col.notNull())
		.addColumn('email', 'text', (col) => col.notNull())
		.addColumn('date', 'timestamptz', (col) =>
			col.defaultTo(sql`now()`).notNull(),
		)
		.addColumn('shipped', 'timestamptz')
		.addColumn('status', 'text')
		.addColumn('tracking_number', 'text', (col) => col.notNull())
		.execute();

	await sql`ALTER SEQUENCE order_reference_seq RESTART WITH 1000`.execute(db);

	await db.schema
		.createTable('order_line')
		.addColumn('id', 'bigserial', (col) => col.primaryKey())
		.addColumn('order_id', 'bigint', (col) =>
			col.notNull().references('order.id').onDelete('restrict'),
		)
		.addColumn('variant_id', 'bigint', (col) =>
			col.notNull().references('product_variant.id').onDelete('restrict'),
		)
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('price', 'integer', (col) => col.notNull())
		.addColumn('quantity', 'integer', (col) => col.notNull())
		.execute();

	await db.schema
		.createTable('payment')
		.addColumn('id', 'bigserial', (col) => col.primaryKey())
		.addColumn('order_id', 'bigint', (col) =>
			col.notNull().references('order.id').onDelete('restrict'),
		)
		.addColumn('status', 'text', (col) => col.notNull())
		.addColumn('date', 'timestamptz')
		.execute();
}
