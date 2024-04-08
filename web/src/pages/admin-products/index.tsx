import { useQuery } from '@tanstack/react-query';

import { getAdminProductVariants } from '~/api';
import { ProductTab } from '~/components-admin/product-tab';
import { Layout } from '~/components-admin/layout';
import { Spinner } from '~/components/spinner';

export const AdminProductsPage = () => {
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
						<div className='my-3 p-2 grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] sm:grid-cols-5 grid-cols-2 items-center justify-between'>
							<span>Name</span>
							<span>Variant</span>
							<span className='hidden md:grid'>Price (USD)</span>
							<span className='sm:text-left text-right'>Stock</span>
							<span className='hidden md:grid'>Available</span>
							<span className='hidden md:grid'>Last updated</span>
						</div>
						{products ? (
							<ul>
								{products?.map((product, id) => (
									<ProductTab key={id} product={product} />
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
