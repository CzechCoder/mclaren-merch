import Router from 'express-promise-router';

import { db } from '~/db';

const productsData = () => [
	{
		id: 1,
		img: '01.jpg',
		name: 'LEGO F1 car',
		category: 'model-cars',
		desc: 'Boys and girls aged 9+ can collect, build and display this LEGO® Speed Champions 2023 McLaren Formula 1 Race Car toy vehicle. This sleek F1 toy car for kids includes several iconic design details from the real-life racing car that proudly celebrated the 60th anniversary of McLaren Racing and competed in the 2023 Formula One World Championship.\nThe McLaren vehicle model includes many realistic features: the black-and-papaya livery, the team-sponsor logos, the wheels with Pirelli print and the papaya safety halo. The buildable car kit also comes with a driver minifigure for kids to place behind the wheel for exciting play races.',
		details: 'Made of Resin\nOver 1000 parts',
		cost: 150,
	},
	{
		id: 2,
		img: '02.jpg',
		name: 'F1 Oscar Piastri cap',
		desc: 'Get race-ready with the McLaren Oscar Piastri Official Teamwear 9Fifty® Cap by New Era. Made with featherweight polyester and featuring HD rubber and embroidered designs, this cap is perfect for motorsport fans who wants to represent their favourite driver.\nThe woven rear loop label and snap closure provide a comfortable fit, while the sleek design adds a touch of style to any outfit. Feel like a true industry expert with this professional and high-quality cap.',
		category: 'men',
		details: 'Made of polyester',
		cost: 50,
	},
	{
		id: 3,
		img: '03.jpg',
		name: 'Teamwear Polo Shirt',
		desc: "This Junior's Official Teamwear Polo Shirt Oscar Piastri is a limited edition piece celebrating one of Formula One's most promising talents.\nThe classic driver Polo Shirt features a sleek pointed collar and concealed placket fastening for a smart look. The mesh panel at the back and underarm ventilation ensure a fresh feel for optimal comfort during tense races.",
		category: 'men',
		details: 'Made of cotton',
		cost: 50,
	},
	{
		id: 4,
		img: '04.jpg',
		name: 'Teamwear Longline Padded Jacket',
		desc: "This Junior's Official Teamwear Polo Shirt Oscar Piastri is a limited edition piece celebrating one of Formula One's most promising talents.\nThe classic driver Polo Shirt features a sleek pointed collar and concealed placket fastening for a smart look. The mesh panel at the back and underarm ventilation ensure a fresh feel for optimal comfort during tense races.",
		category: 'men',
		details: 'Made of cotton',
		cost: 60,
	},
	{
		id: 5,
		img: '05.jpg',
		name: 'Teamwear Set Up T-Shirt Noem',
		desc: "This Junior's Official Teamwear Polo Shirt Oscar Piastri is a limited edition piece celebrating one of Formula One's most promising talents.\nThe classic driver Polo Shirt features a sleek pointed collar and concealed placket fastening for a smart look. The mesh panel at the back and underarm ventilation ensure a fresh feel for optimal comfort during tense races.",
		category: 'men',
		details: 'Made of cotton',
		cost: 40,
	},
	{
		id: 6,
		img: '06.jpg',
		name: 'Teamwear Set Up T-Shirt ',
		desc: "This Junior's Official Teamwear Polo Shirt Oscar Piastri is a limited edition piece celebrating one of Formula One's most promising talents.\nThe classic driver Polo Shirt features a sleek pointed collar and concealed placket fastening for a smart look. The mesh panel at the back and underarm ventilation ensure a fresh feel for optimal comfort during tense races.",
		category: 'men',
		details: 'Made of cotton',
		cost: 40,
	},
];

export const customerRouter = Router();

customerRouter.get('/products', async (req, res) => {
	const category = req.query.category;
	let result;
	if (category === 'new') {
		result = productsData().slice(0, 6);
	} else if (category === 'bestsellers') {
		result = productsData().reverse();
	}
	res.json(result);
});

customerRouter.get('/product', async (req, res) => {
	const product_id = req.query.product_id;
	const result = productsData().find(
		(product) => product.id === Number(product_id),
	);
	res.json(result);
});
