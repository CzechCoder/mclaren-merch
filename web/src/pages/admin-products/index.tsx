import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';

import { getAdminProductVariants } from '~/api';
import { ProductTab } from '~/components-admin/product-tab';
import { Layout } from '~/components-admin/layout';
import { Spinner } from '~/components/spinner';

export const AdminProductsPage: FC = () => {
	const { data: products } = useQuery({
		queryKey: ['getAdminProductVariants'],
		queryFn: getAdminProductVariants,
	});

	return (
		<Layout>
			<div className='flex gap-5'>
				<div className='p-4 w-full'>
					<div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
						<div className='w-full flex justify-start'>
							<div className='text-2xl font-medium'>Products</div>
						</div>
						<div className='my-3 p-2 grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center justify-between'>
							<span>Name</span>
							<span>Variant</span>
							<span className='grid'>Price (USD)</span>
							<span className='text-left'>Stock</span>
							<span className='grid'>Available</span>
							<span className='grid'>Last updated</span>
						</div>
						{products ? (
							<ul>
								{products?.map((product, id) => (
									<ProductTab key={id} {...product} />
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
