import { type FC } from 'react';

export const Footer: FC = () => (
	<div className='max-w-screen-xl h-full mx-auto flex justify-between items-center mt-10 border-t-[1px]'>
		<div className='py-10 text-sm text-gray-500 flex flex-col gap-1'>
			<p>
				The official McLaren Store is operated by Castore, an internationally
				recognised, licensed merchandise partner.
			</p>
			<p>1 Central Street, Manchester, United Kingdom, M2 5WR.</p>
			<p className='mt-2'>WWW.MCLAREN.COM</p>
			<p>© Copyright Mclaren 2024</p>
		</div>
	</div>
);
