import { ColumnType, Generated, Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

const dialect = new PostgresDialect({
	pool: new Pool({
		connectionString:
			process.env.POSTGRES_URL ??
			'postgres://postgres:Elephant12@localhost:5432/mclaren_merch',
	}),
});

export const db = new Kysely<Database>({
	dialect,
});

interface Database {
	category: Category;
	product: Product;
	product_variant: ProductVariant;
}

interface Category {
	id: Generated<bigint>;
	name: string;
	description: string;
}

interface Product {
	id: Generated<bigint>;
	img: string;
	name: string;
	category: bigint;
	description: string;
	details: string;
	cost: number;
}

interface ProductVariant {
	id: Generated<bigint>;
	product_id: bigint;
	name: string;
	img: string;
	units: number;
	data: VariantData;
}

interface VariantData {
	color: string;
	size: string;
}
