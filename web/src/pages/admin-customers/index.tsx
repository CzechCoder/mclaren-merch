import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';

import { getAdminCustomers } from '~/api';
import { CustomerTab } from '~/components-admin/customer-tab';
import { Layout } from '~/components-admin/layout';
import { Spinner } from '~/components/spinner';

export const AdminCustomersPage: FC = () => {
	const { data: customers } = useQuery({
		queryKey: ['getAdminCustomers'],
		queryFn: getAdminCustomers,
	});

	return (
		<Layout>
			<div className='flex gap-5'>
				<div className='p-4 w-full'>
					<div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
						<div className='w-full flex justify-start'>
							<div className='text-2xl font-medium'>Customers</div>
						</div>
						<div className='my-3 p-2 grid grid-cols-[1fr_1fr_1fr] items-center justify-between'>
							<span>Customer Name</span>
							<span>Customer Email</span>
							<span>No. of Orders</span>
						</div>
						{customers ? (
							<ul>
								{customers?.map((customer, id) => (
									<CustomerTab key={id} {...customer} />
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
