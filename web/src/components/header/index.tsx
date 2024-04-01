import {
	IconSearch,
	IconUserCircle,
	IconShoppingBag,
} from '@tabler/icons-react';
import { type FC } from 'react';
import { Link } from 'wouter';

const iconButtons = [
	{
		icon: IconSearch,
		link: '/search',
	},
	{
		icon: IconUserCircle,
		link: '/profile',
	},
	{
		icon: IconShoppingBag,
		link: '/cart',
	},
];

const categories = [
	{
		name: 'MEN',
		link: '/men',
	},
	{
		name: 'WOMEN',
		link: '/women',
	},
	{
		name: 'MODEL CARS',
		link: '/model-cars',
	},
];

export const Header: FC = () => (
	<div className='mb-[98px]'>
		<div className='h-[98px] border-orange-500 border-b-[1px] fixed top-0 left-0 right-0 bg-white z-10'>
			<div className='max-w-screen-xl h-full mx-auto flex justify-between items-center'>
				<Link href='/'>
					<div className='inline-block cursor-pointer'>
						<img src='/images/logo.png' alt='' width={180} />
					</div>
				</Link>
				<div className='gap-2 items-end flex flex-col'>
					<div className='flex flex-row gap-6 items-center h-[40px]'>
						<div className='text-sm text-gray-600'>USD</div>
						<div className='flex gap-6'>
							{iconButtons.map((button) => (
								<Link href={button.link} key={button.link}>
									<button.icon size={18} className='cursor-pointer' />
								</Link>
							))}
						</div>
					</div>
					<div className='flex gap-6 align-middle'>
						{categories.map((category, i) => (
							<span
								className='flex text-sm hover:text-orange-600'
								key={category.link}
							>
								<Link href={category.link}>{category.name}</Link>
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
);
