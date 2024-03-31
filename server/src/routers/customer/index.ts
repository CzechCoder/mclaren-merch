import Router from 'express-promise-router';

import { db } from '~/db';

const productsData = [
	{
		id: 1,
		img: '01.jpg',
		name: 'LEGO F1 car',
		category: 'model-cars',
		cost: 150,
	},
	{
		id: 2,
		img: '02.jpg',
		name: 'F1 Oscar Piastri cap',
		category: 'men',
		cost: 50,
	},
	{
		id: 3,
		img: '03.jpg',
		name: 'Teamwear Polo Shirt',
		category: 'men',
		cost: 50,
	},
	{
		id: 4,
		img: '04.jpg',
		name: 'Teamwear Longline Padded Jacket',
		category: 'men',
		cost: 60,
	},
	{
		id: 5,
		img: '05.jpg',
		name: 'Teamwear Set Up T-Shirt Noem',
		category: 'men',
		cost: 40,
	},
	{
		id: 6,
		img: '06.jpg',
		name: 'Teamwear Set Up T-Shirt ',
		category: 'men',
		cost: 40,
	},
];

export const customerRouter = Router();

customerRouter.get('/products', async (req, res) => {
	const category = req.query.category;
	let result;
	if (category === 'new') {
		result = productsData.slice(0, 6);
	} else if (category === 'bestsellers') {
		result = productsData.reverse();
	}
	res.json(result);
});
