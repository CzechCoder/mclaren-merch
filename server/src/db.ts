import { ColumnType, Generated, Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

const dialect = new PostgresDialect({
	pool: new Pool({
		connectionString:
			process.env.POSTGRES_URL ??
			'postgres://postgres:postgres@localhost:5432/postgres',
	}),
});

export const db = new Kysely<Database>({
	dialect,
});

interface Database {
	order: Order;
}

interface Order {
	id: Generated<bigint>;
	customer_id: string;
	created: ColumnType<Date, string, string>;
}
