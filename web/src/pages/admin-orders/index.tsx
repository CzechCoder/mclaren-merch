import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';

import { getAdminOrders } from '~/api';
import { Layout } from '~/components-admin/layout';
import { OrderTab } from '~/components-admin/order-tab';
import { Spinner } from '~/components/spinner';

export const AdminOrdersPage: FC = () => {
	const { data: orders } = useQuery<Order[]>({
		queryKey: ['getAdminOrders'],
		queryFn: getAdminOrders,
	});

	return (
		<Layout>
			<div className='flex gap-5'>
				<div className='p-4 w-full'>
					<div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
						<div className='w-full flex justify-start'>
							<div className='text-2xl font-medium'>Orders</div>
						</div>
						<div className='my-3 p-2 grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center justify-between'>
							<span>Number</span>
							<span>Date</span>
							<span className='grid'>Customer</span>
							<span className='text-left'>Payment</span>
							<span className='grid'>Fulfillment status</span>
							<span className='grid'>Total</span>
						</div>
						{orders ? (
							<ul>
								{orders?.map((order, id) => <OrderTab key={id} {...order} />)}
							</ul>
						) : (
							<div>
								<Spinner />
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};
