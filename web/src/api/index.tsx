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
