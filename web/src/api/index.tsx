import axios from 'axios';

const client = axios.create();

// shop
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

//admin
export const getAdminProductVariants = async () => {
	const { data } = await client.get('/api/admin/products');
	return data;
};

export const getAdminOrders = async () => {
	const { data } = await client.get('/api/admin/orders');
	return data;
};

export const getAdminCustomers = async () => {
	const { data } = await client.get('/api/admin/customers');
	return data;
};
