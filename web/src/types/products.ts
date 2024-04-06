interface Product {
	id: number;
	img: string;
	name: string;
	apparel: boolean;
	category_id: number;
	description: string;
	details: string;
	slug: string;
	variants: Variant[];
	price?: number;
}

interface Variant {
	id: string;
	product_id: number;
	name: string;
	img: string;
	price: number;
	stock: number;
	slug: string;
	data: any;
}

interface ProductWithVariants extends Product {
	product_id: string;
	variant_name: string;
	stock: number;
	data: any;
	available: boolean;
	last_updated: string;
	name: string;
}
