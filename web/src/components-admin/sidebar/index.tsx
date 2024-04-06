import { RxDashboard } from 'react-icons/rx';
import { LuBox } from 'react-icons/lu';
import { BsCart3 } from 'react-icons/bs';
import { MdOutlineGroup } from 'react-icons/md';
import { Link } from 'wouter';
import { type FC } from 'react';

const sidebarButtons = [
	{
		name: 'Home',
		link: '/admin',
		icon: RxDashboard,
	},
	{
		name: 'Products',
		link: '/admin/products',
		icon: LuBox,
	},
	{
		name: 'Orders',
		link: '/admin/orders',
		icon: BsCart3,
	},
	{
		name: 'Customers',
		link: '/admin/customers',
		icon: MdOutlineGroup,
	},
];

export const Sidebar: FC = () => {
	return (
		<div className='w-64 bg-gray-950 p-5 flex flex-col gap-10'>
			<div className='inline-block'>
				<img src='/images/logo_white.png' alt='' width={160} />
			</div>
			<div className='flex flex-col'>
				{sidebarButtons.map((button) => (
					<Link href={button.link} key={button.name}>
						<div className='w-full text-lg text-gray-300 hover:text-white cursor-pointer hover:bg-gray-500 p-2 flex items-center gap-2'>
							<button.icon />
							{button.name}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
