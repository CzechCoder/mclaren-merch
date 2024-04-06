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
	user: User;
	order: Order;
	order_line: OrderLine;
	payment: Payment;
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
	apparel: boolean;
	category_id: bigint;
	description: string;
	details: string;
	price: number;
	slug: string;
}

interface ProductVariant {
	id: Generated<bigint>;
	product_id: bigint;
	name: string;
	img: string;
	stock: number;
	available: boolean;
	last_updated: Generated<Date>;
	slug: string;
	data?: VariantData;
}

interface VariantData {
	color: string;
	size: string;
}

interface User {
	id: Generated<bigint>;
	email: string;
	first_name: string;
	last_name: string;
	city: string;
	street: string;
	zip: string;
	phone: string;
	country: string;
	is_admin: boolean;
}

interface Order {
	id: Generated<bigint>;
	reference: Generated<bigint>;
	user_id: bigint;
	name: string;
	city: string;
	street: string;
	zip: string;
	country: string;
	phone: string;
	vat: string;
	shipping: number;
	email: string;
	date: ColumnType<Date, string, string>;
	shipped: ColumnType<Date, string, string>;
	status: 'pending' | 'shipped' | 'delivered' | 'returned';
	tracking_number: string;
}

interface OrderLine {
	id: Generated<bigint>;
	order_id: bigint;
	variant_id: bigint;
	name: string;
	price: number;
	quantity: number;
}

interface Payment {
	id: Generated<bigint>;
	order_id: bigint;
	status: 'paid' | 'refunded';
	date: Date;
}
