import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';

import { getProductsThumbnails } from '~/api';
import {
	HomePageProductCard,
	CategoryProductCard,
} from '~/components/product-card';
import { Spinner } from '~/components/spinner';

interface RowProps {
	title: string;
	category: string;
}

export const HomePageRow: FC<RowProps> = ({ title, category }) => {
	const { data: products } = useQuery<Product[]>({
		queryKey: ['getProductsThumbnails', category],
		queryFn: () => getProductsThumbnails(category),
	});

	return (
		<div className='max-w-screen-xl h-full mx-auto py-5'>
			<h2 className='font-medium text-2xl my-6 px-3 sm:px-0'>{title}</h2>
			<div className='flex flex-row gap-2 overflow-hidden overflow-x-scroll px-2 sm:px-0 no-scrollbar'>
				{products ? (
					products.map((product) => (
						<HomePageProductCard {...product} key={product.name} />
					))
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export const CategoryRow: FC<RowProps> = ({ title, category }) => {
	const { data: products } = useQuery<Product[]>({
		queryKey: ['getProductsThumbnails', category],
		queryFn: () => getProductsThumbnails(category),
	});

	return (
		<div className='max-w-screen-xl h-full mx-auto py-5 overflow-hidden'>
			<h2 className='font-medium text-2xl my-6'>{title}</h2>
			<div className='flex flex-row gap-2'>
				{products ? (
					products.map((product) => (
						<CategoryProductCard {...product} key={product.name} />
					))
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};
