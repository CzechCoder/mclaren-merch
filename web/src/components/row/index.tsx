import { Product, ProductCard } from '../product-card';
import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';

import { Spinner } from '~/components/spinner';
import { getProducts } from '~/api';

interface RowProps {
	title: string;
	category: string;
}

export const Row: FC<RowProps> = ({ title, category }) => {
	const { data: products } = useQuery<Product[]>({
		queryKey: ['getProducts', category],
		queryFn: () => getProducts(category),
	});

	console.log(products);

	return (
		<div className='max-w-screen-xl h-full mx-auto py-5'>
			<h2 className='font-medium text-2xl my-6'>{title}</h2>
			<div className='flex flex-row gap-2'>
				{products ? (
					products.map((product) => (
						<ProductCard {...product} key={product.name} />
					))
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};
