import { db } from './src/db';

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
				category: BigInt(1),
				description:
					"Our lightweight Men's McLaren Short Sleeve Performance Polo Shirt is technically engineered with mesh panelling, frontal zip mechanism, and reflective modifications to push you to perform at your best under pressure - even in low-level visibility.\nThe Polo Shirt features a sleek pointed collar and concealed placket fastening for a smart look. The mesh panel at the back and underarm ventilation ensure a fresh feel for optimal comfort during tense races.",
				details: 'Pointed collar\nMesh back panel for improved breathability',
				cost: 75,
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/mens_tshirt.jpg',
				name: 'Mens Born To Race T-Shirt',
				category: BigInt(1),
				description:
					"Get Grand Prix-ready in our Men's McLaren Short Sleeve Born To Race T Shirt, available in a bold Papaya and Plum Perfect, colourways to sync with the season. The classic speedmark logo and our rotating 'Born To Race' back print ensures you can showcase the heritage and forward motion of the McLaren F1 racing team.",
				details:
					'Crew neckline\nScreen printed circular graphic with team logo at back',
				cost: 50,
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/womens_polo.jpg',
				name: 'Womens Official Teamwear Polo Shirt Neom McLaren Extreme E',
				category: BigInt(2),
				description:
					"Designed in a classic fit, this Women's Neom McLaren Extreme E Official Teamwear Polo Shirt is seamlessly tailored for a polished look. Stay comfortable while cheering on your favourite team with heat-sealed laser-cut holes strategically positioned below the arms to ensure superior breathability.",
				details:
					'Concealed placket fastening\nContrast taping at shoulders and waist',
				cost: 90,
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/womens_tshirt.jpg',
				name: 'Womens Core Essentials T-Shirt',
				category: BigInt(2),
				description:
					"Celebrate your team with the Women's McLaren Core Essentials T-Shirt. Made from lightweight, breathable cotton fabric, this is a classic fit T-Shirt for McLaren fans. Complete with set-in short sleeves and a crew neckline with contrast tipping.",
				details:
					'Crew neckline with contrast tipping\nMcLaren branding at front',
				cost: 50,
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/toys_lego_formula1.jpg',
				name: 'LEGO Speed Champions 2023 McLaren Formula 1 Race Car',
				category: BigInt(3),
				description:
					'Boys and girls aged 9+ can collect, build and display this LEGO® Speed Champions 2023 McLaren Formula 1 Race Car toy vehicle. This sleek F1 toy car for kids includes several iconic design details from the real-life racing car that proudly celebrated the 60th anniversary of McLaren Racing and competed in the 2023 Formula One World Championship.\nThe McLaren vehicle model includes many realistic features: the black-and-papaya livery, the team-sponsor logos, the wheels with Pirelli print and the papaya safety halo. The buildable car kit also comes with a driver minifigure for kids to place behind the wheel for exciting play races.',
				details: 'Made of recyclable plastic\nOver 1000 parts',
				cost: 40,
			},
			{
				img: 'http://tomasburian.com/dev/cdn/mclaren/220x220/toys_lego_offroad.jpg',
				name: 'LEGO Technic NEOM McLaren Extreme E Race Car',
				category: BigInt(3),
				description:
					"Looking for an exciting gift for kids who love racing car toys? This pull-back car for boys and girls aged 7+ delivers thrills at every turn. First youngsters can enjoy building the LEGO® Technic NEOM McLaren Extreme E Race Car (42166). Then it's time to have fun racing the car using the pull-back action.\nThis car toy captures the character of the real-life model and features chunky off-road tyres, an eye-catching colour scheme and authentic partner logos. Kids will love imagining what it's like to race in remote parts of the world like a real Extreme E driver. This set makes a fun birthday or any-occasion gift for kids who love vehicles and car toys.",
				details: 'Made of recyclable plastic\nOver 800 parts',
				cost: 35,
			},
		])
		.execute();

	await db
		.insertInto('product_variant')
		.values([
			{
				product_id: BigInt(1),
				name: 'Black - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens-polo_black.jpg',
				units: 30,
				data: { color: '#595959', size: 'S' },
			},
			{
				product_id: BigInt(1),
				name: 'Black - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens-polo_black.jpg',
				units: 50,
				data: { color: '#595959', size: 'M' },
			},
			{
				product_id: BigInt(1),
				name: 'Black - L',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens-polo_black.jpg',
				units: 0,
				data: { color: '##595959', size: 'L' },
			},
			{
				product_id: BigInt(1),
				name: 'Red - S',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens-polo_red.jpg',
				units: 10,
				data: { color: '#502b33', size: 'S' },
			},
			{
				product_id: BigInt(1),
				name: 'Red - M',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens-polo_red.jpg',
				units: 40,
				data: { color: '#502b33', size: 'M' },
			},
			{
				product_id: BigInt(1),
				name: 'Red - L',
				img: 'http://tomasburian.com/dev/cdn/mclaren/700x700/mens-polo_red.jpg',
				units: 25,
				data: { color: '#502b33', size: 'L' },
			},
		])
		.execute();
}

createSeed();
