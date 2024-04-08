import { type FC } from 'react';
import dayjs from 'dayjs';

const payment_status_table = {
	['paid']: 'Paid',
	['refunded']: 'Refunded',
};

const fulfillment_status_table = {
	['pending']: 'Pending',
	['shipped']: 'Shipped',
	['delivered']: 'Delivered',
	['returned']: 'Returned',
};

export const OrderTab: FC<Order> = (order) => {
	return (
		<li className='bg-gray-100 hover:bg-gray-200 auto-cols-min rounded-lg my-3 p-2 grid md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] sm:grid-cols-5 grid-cols-2 items-center justify-between'>
			<p className='pl-4'>#{order.reference}</p>
			<p>{dayjs(order.date).format('MMM D, YYYY h:mm A')}</p>
			<p className='text-gray-600 sm:text-left text-right'>{order.name}</p>
			<p className='text-gray-600 sm:text-left text-right'>
				{payment_status_table[order.payment_status] ?? 'Unpaid'}
			</p>
			<p>{fulfillment_status_table[order.status]}</p>
			<div className='sm:flex hidden justify-between items-center'>
				<p>
					<span className='text-xs'>USD</span> {order.total_price}
				</p>
			</div>
		</li>
	);
};
