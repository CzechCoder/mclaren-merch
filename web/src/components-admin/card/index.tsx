import { FC } from 'react';

interface CardProps {
	title: string;
	value: number;
	currency?: string;
}

export const Card: FC<CardProps> = (props) => {
	return (
		<div className='p-5 bg-white rounded-lg gap-5 w-full'>
			<div className='flex flex-col'>
				<span className='text-2xl font-bold'>
					{props.currency}
					{props.value}
				</span>
				<span className='text-md text-gray-700'>{props.title}</span>
			</div>
		</div>
	);
};
