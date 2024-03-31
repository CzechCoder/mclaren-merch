import { type FC } from 'react';
import { Header } from '~/components/header';
import { Row } from '~/components/row';

export const HomePage: FC = () => {
	return (
		<div>
			<Header />
			<Row title='New arrivals' category='new' />
			<Row title='Bestsellers' category='bestsellers' />
		</div>
	);
};
