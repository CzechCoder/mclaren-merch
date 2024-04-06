import { RxCrossCircled } from 'react-icons/rx';
import { MdDeleteOutline } from 'react-icons/md';
import { CiCircleCheck } from 'react-icons/ci';
import dayjs from 'dayjs';

export const ProductTab = ({ product }: { product: ProductWithVariants }) => {
	return (
		<li className='bg-gray-100 hover:bg-gray-200 auto-cols-min rounded-lg my-3 p-2 grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] sm:grid-cols-5 grid-cols-2 items-center justify-between'>
			<div className='flex items-center pr-5'>
				<img src={product.img} alt='' width={50} height={50} />
				<p className='pl-4'>{product.name}</p>
			</div>
			<p>{product.variant_name}</p>
			<p className='text-gray-600 sm:text-left text-right'>{product.price}</p>
			<p className='text-gray-600 sm:text-left text-right'>{product.stock}</p>
			<p>
				{product.available ? (
					<CiCircleCheck
						size={30}
						className='p-1 bg-green-500 rounded-3xl text-white'
					/>
				) : (
					<RxCrossCircled
						size={30}
						className='p-1 bg-red-500 rounded-3xl text-white'
					/>
				)}
			</p>
			<p>{dayjs(product.last_updated).format('MMM D, YYYY h:mm A')}</p>
		</li>
	);
};
