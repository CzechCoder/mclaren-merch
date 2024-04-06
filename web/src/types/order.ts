interface Order {
	id: string;
	reference: string;
	user_id: string;
	name: string;
	date: string;
	status: 'pending' | 'shipped' | 'delivered' | 'returned';
	payment_status?: 'paid' | 'refunded';
	total_price: number;
}
