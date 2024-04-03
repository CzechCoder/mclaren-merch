export interface Product {
	id: number;
	img: string;
	name: string;
	apparel: boolean;
	category_id: number;
	description: string;
	details: string;
	cost: number;
	slug: string;
	variants: Variant[];
}

interface Variant {
	id: string;
	product_id: number;
	name: string;
	img: string;
	units: number;
	slug: string;
	data: any;
}
