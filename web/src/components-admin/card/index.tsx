import { type FC } from 'react';

interface CardProps {
	title: string;
	value: number;
	currency?: string;
}

export const Card: FC<CardProps> = ({ currency, title, value }) => {
	return (
		<div className='p-5 bg-white rounded-lg gap-5 w-full'>
			<div className='flex flex-col'>
				<span className='text-2xl font-bold'>
					{currency}
					{value}
				</span>
				<span className='text-md text-gray-700'>{title}</span>
			</div>
		</div>
	);
};
