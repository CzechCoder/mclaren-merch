import { db } from './src/db';

async function createSeed() {
	await db
		.insertInto('category')
		.values([{ name: 'Men', description: 'Products for men' }])
		.execute();

	await db
		.insertInto('product')
		.values([
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/190x190/01.jpg',
				name: 'Teamwear Polo Shirt',
				category: BigInt(1),
				description:
					"This Junior's Official Teamwear Polo Shirt Oscar Piastri is a limited edition piece celebrating one of Formula One's most promising talents.\nThe classic driver Polo Shirt features a sleek pointed collar and concealed placket fastening for a smart look. The mesh panel at the back and underarm ventilation ensure a fresh feel for optimal comfort during tense races.",
				details: 'Made of cotton',
				cost: 100,
			},
		])
		.execute();

	await db
		.insertInto('product_variant')
		.values([
			{
				product_id: BigInt(1),
				name: 'Orange - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/600x600/01_orange.jpg',
				units: 0,
				data: { color: '#fb923c', size: 'S' },
			},
			{
				product_id: BigInt(1),
				name: 'Orange - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/600x600/01_orange.jpg',
				units: 0,
				data: { color: '#fb923c', size: 'M' },
			},
			{
				product_id: BigInt(1),
				name: 'Orange - L',
				img: 'http://tomasburian.com/dev/cdn/mclaren/600x600/01_orange.jpg',
				units: 0,
				data: { color: '#fb923c', size: 'L' },
			},
		])
		.execute();
}

createSeed();
