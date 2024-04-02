import { type FC } from 'react';
import { Link } from 'wouter';

import { type Product } from '~/types/products';

export const HomePageProductCard: FC<Product> = (props) => (
	<Link
		className='w-[250px] flex flex-col border p-4 rounded-lg hover:border-gray-400'
		href={`/products/${props.slug}`}
	>
		<img alt='' src={props.img} className='my-5' />
		<div>
			<h3 className='text-lg py-4'>{props.name}</h3>
			<p className='text-md text-gray-500'>${props.cost}</p>
		</div>
	</Link>
);

export const CategoryProductCard: FC<Product> = (props) => (
	<Link
		className='w-[250px] flex flex-col border p-4 rounded-lg hover:border-gray-400'
		href={`/products/${props.id}`}
	>
		<img alt='' src={props.img} className='my-5' />
		<div>
			<h3 className='text-lg py-4'>{props.name}</h3>
			<p className='text-md text-gray-500'>${props.cost}</p>
		</div>
	</Link>
);
