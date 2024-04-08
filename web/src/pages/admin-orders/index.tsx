import { useQuery } from '@tanstack/react-query';

import { getAdminOrders } from '~/api';
import { Layout } from '~/components-admin/layout';
import { OrderTab } from '~/components-admin/order-tab';
import { Spinner } from '~/components/spinner';

export const AdminOrdersPage = () => {
	const { data: orders } = useQuery({
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
						<div className='my-3 p-2 grid md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] sm:grid-cols-5 grid-cols-2 items-center justify-between'>
							<span>Number</span>
							<span>Date</span>
							<span className='hidden md:grid'>Customer</span>
							<span className='sm:text-left text-right'>Payment</span>
							<span className='hidden md:grid'>Fulfillment status</span>
							<span className='hidden md:grid'>Total</span>
						</div>
						{orders ? (
							<ul>
								{orders?.map((order, id) => (
									<OrderTab key={id} order={order} />
								))}
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
