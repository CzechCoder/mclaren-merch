import { db } from '~/db';

async function createSeed() {
	await db
		.insertInto('category')
		.values([
			{ name: 'Men', description: 'Products for men' },
			{ name: 'Women', description: 'Products for women' },
			{ name: 'Toys', description: 'Toy cars and others' },
		])
		.execute();

	await db
		.insertInto('product')
		.values([
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/mens_polo.jpg',
				name: 'Mens Performance Polo Shirt',
				apparel: true,
				category_id: BigInt(1),
				description:
					"Our lightweight Men's McLaren Short Sleeve Performance Polo Shirt is technically engineered with mesh panelling, frontal zip mechanism, and reflective modifications to push you to perform at your best under pressure - even in low-level visibility.\nThe Polo Shirt features a sleek pointed collar and concealed placket fastening for a smart look. The mesh panel at the back and underarm ventilation ensure a fresh feel for optimal comfort during tense races.",
				details: 'Pointed collar\nMesh back panel for improved breathability',
				price: 75,
				slug: 'mens-performance-polo-shirt',
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/mens_tshirt.jpg',
				name: 'Mens Born To Race T-Shirt',
				apparel: true,
				category_id: BigInt(1),
				description:
					"Get Grand Prix-ready in our Men's McLaren Short Sleeve Born To Race T Shirt, available in a bold Papaya and Plum Perfect, colourways to sync with the season. The classic speedmark logo and our rotating 'Born To Race' back print ensures you can showcase the heritage and forward motion of the McLaren F1 racing team.",
				details:
					'Crew neckline\nScreen printed circular graphic with team logo at back',
				price: 50,
				slug: 'mens-born-to-race-t-shirt',
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/womens_polo.jpg',
				name: 'Womens Official Teamwear Polo Shirt Neom McLaren Extreme E',
				apparel: true,
				category_id: BigInt(2),
				description:
					"Designed in a classic fit, this Women's Neom McLaren Extreme E Official Teamwear Polo Shirt is seamlessly tailored for a polished look. Stay comfortable while cheering on your favourite team with heat-sealed laser-cut holes strategically positioned below the arms to ensure superior breathability.",
				details:
					'Concealed placket fastening\nContrast taping at shoulders and waist',
				price: 90,
				slug: 'womens-official-teamwear-polo-shirt-neom-mclaren-extreme-e',
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/womens_tshirt.jpg',
				name: 'Womens Core Essentials T-Shirt',
				apparel: true,
				category_id: BigInt(2),
				description:
					"Celebrate your team with the Women's McLaren Core Essentials T-Shirt. Made from lightweight, breathable cotton fabric, this is a classic fit T-Shirt for McLaren fans. Complete with set-in short sleeves and a crew neckline with contrast tipping.",
				details:
					'Crew neckline with contrast tipping\nMcLaren branding at front',
				price: 50,
				slug: 'womens-core-essentials-t-shirt',
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/toys_lego_formula1.jpg',
				name: 'LEGO Speed Champions 2023 McLaren Formula 1 Race Car',
				category_id: BigInt(3),
				description:
					'Boys and girls aged 9+ can collect, build and display this LEGO® Speed Champions 2023 McLaren Formula 1 Race Car toy vehicle. This sleek F1 toy car for kids includes several iconic design details from the real-life racing car that proudly celebrated the 60th anniversary of McLaren Racing and competed in the 2023 Formula One World Championship.\nThe McLaren vehicle model includes many realistic features: the black-and-papaya livery, the team-sponsor logos, the wheels with Pirelli print and the papaya safety halo. The buildable car kit also comes with a driver minifigure for kids to place behind the wheel for exciting play races.',
				details: 'Made of recyclable plastic\nOver 1000 parts',
				price: 40,
				slug: 'lego-speed-champions-2023-mclaren-formula-1-race-car',
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/toys_lego_offroad.jpg',
				name: 'LEGO Technic NEOM McLaren Extreme E Race Car',
				category_id: BigInt(3),
				description:
					"Looking for an exciting gift for kids who love racing car toys? This pull-back car for boys and girls aged 7+ delivers thrills at every turn. First youngsters can enjoy building the LEGO® Technic NEOM McLaren Extreme E Race Car (42166). Then it's time to have fun racing the car using the pull-back action.\nThis car toy captures the character of the real-life model and features chunky off-road tyres, an eye-catching colour scheme and authentic partner logos. Kids will love imagining what it's like to race in remote parts of the world like a real Extreme E driver. This set makes a fun birthday or any-occasion gift for kids who love vehicles and car toys.",
				details: 'Made of recyclable plastic\nOver 800 parts',
				price: 35,
				slug: 'lego-technic-neom-mclaren-extreme-e-race-car',
			},
		])
		.execute();

	await db
		.insertInto('product_variant')
		.values([
			{
				product_id: BigInt(1),
				name: 'Black - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_polo_black.jpg',
				stock: 30,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#595959', color_name: 'black', size: 'S' },
				slug: 'black-s',
			},
			{
				product_id: BigInt(1),
				name: 'Black - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_polo_black.jpg',
				stock: 50,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#595959', color_name: 'black', size: 'M' },
				slug: 'black-m',
			},
			// {
			// 	product_id: BigInt(1),
			// 	name: 'Black - L',
			// 	img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_polo_black.jpg',
			// 	stock: 0,
			// available: true,
			// 	last_updated: 2024-04-04T12:00:00Z"",
			// 	data: { color: '#595959', color_name: 'black', size: 'L' },
			// 	slug: 'black-l',
			// },
			{
				product_id: BigInt(1),
				name: 'Red - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_polo_red.jpg',
				stock: 10,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#502b33', color_name: 'red', size: 'S' },
				slug: 'red-s',
			},
			{
				product_id: BigInt(1),
				name: 'Red - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_polo_red.jpg',
				stock: 40,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#502b33', color_name: 'red', size: 'M' },
				slug: 'red-m',
			},
			{
				product_id: BigInt(1),
				name: 'Red - L',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_polo_red.jpg',
				stock: 25,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#502b33', color_name: 'red', size: 'L' },
				slug: 'red-l',
			},
			{
				product_id: BigInt(2),
				name: 'Orange - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_tshirt_orange.jpg',
				stock: 35,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#ff8000', color_name: 'orange', size: 'S' },
				slug: 'orange-s',
			},
			{
				product_id: BigInt(2),
				name: 'Red - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_tshirt_red.jpg',
				stock: 35,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#714657', color_name: 'red', size: 'S' },
				slug: 'red-s',
			},
			{
				product_id: BigInt(2),
				name: 'Red - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens_tshirt_red.jpg',
				stock: 15,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#714657', color_name: 'red', size: 'M' },
				slug: 'red-m',
			},
			{
				product_id: BigInt(3),
				name: 'Black - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/womens_polo_black.jpg',
				stock: 5,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#444', color_name: 'black', size: 'S' },
				slug: 'black-s',
			},
			{
				product_id: BigInt(3),
				name: 'Black - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/womens_polo_black.jpg',
				stock: 25,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#444', color_name: 'black', size: 'M' },
				slug: 'black-m',
			},
			{
				product_id: BigInt(4),
				name: 'Black - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/womens_tshirt_black.jpg',
				stock: 13,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#000', color_name: 'black', size: 'S' },
				slug: 'black-s',
			},
			{
				product_id: BigInt(4),
				name: 'Black - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/womens_tshirt_black.jpg',
				stock: 27,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#000', color_name: 'black', size: 'M' },
				slug: 'black-m',
			},
			{
				product_id: BigInt(4),
				name: 'Orange - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/womens_tshirt_orange.jpg',
				stock: 35,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: { color: '#ff8000', color_name: 'orange', size: 'S' },
				slug: 'orange-s',
			},
			{
				product_id: BigInt(5),
				name: 'Lego Formula 1',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/toys_lego_formula1.jpg',
				stock: 65,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: {},
				slug: 'lego-formula-1',
			},
			{
				product_id: BigInt(6),
				name: 'Lego Offroad',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/toys_lego_offroad.jpg',
				stock: 55,
				available: true,
				last_updated: '2024-04-04T12:00:00Z',
				data: {},
				slug: 'lego-offroad',
			},
		])
		.execute();

	await db
		.insertInto('user')
		.values([
			{
				email: 'tanya.h@gmail.com',
				first_name: 'Tanya',
				last_name: 'Harding',
				city: 'York',
				street: 'Wells st. 131',
				zip: '45 000',
				phone: '189100232',
				country: 'UK',
			},
			{
				email: 'preston.k@gmail.com',
				first_name: 'Preston',
				last_name: 'Keller',
				city: 'Boulder - Colorado',
				street: '3rd Greenery 45',
				zip: '156 12',
				phone: '1800523156',
				country: 'USA',
			},
			{
				email: 'david.g@gmail.com',
				first_name: 'David',
				last_name: 'G',
				city: 'Paris',
				street: 'Lavignon av. 54',
				zip: '710 15',
				phone: '471008977',
				country: 'France',
				is_admin: true,
			},
		])
		.execute();

	await db
		.insertInto('order')
		.values([
			{
				user_id: BigInt(1),
				name: 'Tanya B. Harding',
				city: 'York',
				street: 'Wells st. 131',
				zip: '45 000',
				country: 'UK',
				phone: '189100232',
				shipping: 10,
				email: 'tanya.h@gmail.com',
				date: '2023-04-05 15:58:03.660485+02',
				shipped: '2023-04-06 15:58:03.660485+02',
				delivered: '2023-04-07 15:58:03.660485+02',
				status: 'delivered',
				tracking_number: '1A34R5',
			},
			{
				user_id: BigInt(1),
				name: 'Tanya B. Harding',
				city: 'York',
				street: 'Wells st. 131',
				zip: '45 000',
				country: 'UK',
				phone: '189100232',
				shipping: 10,
				email: 'tanya.h@gmail.com',
				date: '2024-04-05 15:58:03.660485+02',
				status: 'pending',
				tracking_number: '1A34R5',
			},
			{
				user_id: BigInt(2),
				name: 'Preston S. Keller',
				city: 'Boulder - Colorado',
				street: '3rd Greenery 45',
				zip: '156 12',
				country: 'USA',
				phone: '1800523156',
				shipping: 20,
				email: 'preston.k@gmail.com',
				date: '2024-04-05 15:58:03.660485+02',
				shipped: '2024-04-07 15:58:03.660485+02',
				delivered: '2024-04-08 15:58:03.660485+02',
				status: 'delivered',
				tracking_number: '2B84RS',
			},
			{
				user_id: BigInt(2),
				name: 'Preston S. Keller',
				city: 'Boulder - Colorado',
				street: '3rd Greenery 45',
				zip: '156 12',
				country: 'USA',
				phone: '1800523156',
				shipping: 30,
				email: 'preston.k@gmail.com',
				date: '2024-04-05 15:58:03.660485+02',
				shipped: '2024-04-07 15:58:03.660485+02',
				delivered: '2024-04-08 15:58:03.660485+02',
				status: 'returned',
				tracking_number: 'OP4561',
			},
		])
		.execute();

	await db
		.insertInto('order_line')
		.values([
			{
				order_id: BigInt(1),
				variant_id: BigInt(2),
				name: 'Mens Performance Polo Shirt',
				price: 90,
				quantity: 2,
			},
			{
				order_id: BigInt(2),
				variant_id: BigInt(2),
				name: 'Mens Performance Polo Shirt',
				price: 90,
				quantity: 2,
			},
			{
				order_id: BigInt(2),
				variant_id: BigInt(7),
				name: 'Mens Born To Race T-Shirt',
				price: 30,
				quantity: 1,
			},
			{
				order_id: BigInt(3),
				variant_id: BigInt(10),
				name: 'Womens Official Teamwear Polo Shirt Neom McLaren Extreme E',
				price: 70,
				quantity: 2,
			},
			{
				order_id: BigInt(3),
				variant_id: BigInt(14),
				name: 'LEGO Speed Champions 2023 McLaren Formula 1 Race Car',
				price: 40,
				quantity: 1,
			},
			{
				order_id: BigInt(4),
				variant_id: BigInt(12),
				name: 'Womens Core Essentials T-Shirt',
				price: 50,
				quantity: 1,
			},
		])
		.execute();

	await db
		.insertInto('payment')
		.values([
			{
				order_id: BigInt(1),
				status: 'paid',
				date: '2023-04-05 16:35:09.860634+02',
			},
			{
				order_id: BigInt(2),
				status: 'paid',
				date: '2024-04-08 16:34:09.860634+02',
			},
			{
				order_id: BigInt(3),
				status: 'paid',
				date: '2024-04-08 10:34:09.860634+02',
			},
			{
				order_id: BigInt(4),
				status: 'paid',
				date: '2024-04-08 10:45:09.860634+02',
			},
			{
				order_id: BigInt(4),
				status: 'refunded',
				date: '2024-04-08 11:34:09.860634+02',
			},
		])
		.execute();
}

createSeed();
