import { type FC } from 'react';
import { Footer } from '~/components/footer';

import { Header } from '~/components/header';
import { HomePageRow } from '~/components/row';

export const HomePage: FC = () => {
	return (
		<div>
			<Header />
			<HomePageRow title='New arrivals' category='new' />
			<HomePageRow title='Bestsellers' category='bestsellers' />
			<Footer />
		</div>
	);
};
