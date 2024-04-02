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
		.addColumn('category_id', 'bigint', (col) =>
			col.notNull().references('category.id').onDelete('restrict'),
		)
		.addColumn('description', 'text', (col) => col.notNull())
		.addColumn('details', 'text', (col) => col.notNull())
		.addColumn('cost', 'integer', (col) => col.notNull())
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
		.addColumn('units', 'integer', (col) => col.notNull())
		.addColumn('data', 'jsonb', (col) => col.notNull())
		.addColumn('slug', 'text', (col) => col.notNull())
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('product').execute();
}
