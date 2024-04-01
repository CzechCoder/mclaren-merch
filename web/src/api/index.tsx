import axios from 'axios';

const client = axios.create();

export const getProducts = async (category) => {
	const { data } = await client.get('/api/customer/products', {
		params: {
			category: category,
		},
	});
	return data;
};

export const getProduct = async (product_id) => {
	const { data } = await client.get('/api/customer/product', {
		params: {
			product_id: product_id,
		},
	});
	return data;
};
