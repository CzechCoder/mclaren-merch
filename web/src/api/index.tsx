import axios from 'axios';

const client = axios.create();

export const getProduct = async (product_slug) => {
	const { data } = await client.get(`/api/customer/products/${product_slug}`);
	return data;
};

export const getProductsThumbnails = async (category) => {
	const { data } = await client.get('/api/customer/products', {
		params: {
			category: category,
		},
	});
	return data;
};
