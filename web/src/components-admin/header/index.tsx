import { type FC } from 'react';

export const Header: FC = () => {
	return (
		<div className='h-[68px] p-6 bg-white z-10 border-white shadow-[0_2px_2px_0_rgb(163,163,163)]'>
			<div className='h-full flex justify-end items-center'>
				<div>
					<span className='block h-[30px] w-[30px] rounded-full bg-gray-100 border-2 border-white shadow-[0_0_0_2px_black]' />
				</div>
			</div>
		</div>
	);
};
