import '~/index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Route, Switch } from 'wouter';
import { type FC } from 'react';

import { HomePage } from '~/pages/home';
import { MenPage } from '~/pages/men';
import { WomenPage } from '~/pages/women';
import { ToysPage } from '~/pages/toys';
import { SearchPage } from '~/pages/search';
import { ProfilePage } from '~/pages/profile';
import { CartPage } from '~/pages/cart';
import { ProductPage } from '~/pages/product';

const queryClient = new QueryClient();

const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Switch>
				<Route path='/' component={HomePage} />
				<Route path='/men' component={MenPage} />
				<Route path='/women' component={WomenPage} />
				<Route path='/toys' component={ToysPage} />
				<Route path='/search' component={SearchPage} />
				<Route path='/profile' component={ProfilePage} />
				<Route path='/cart' component={CartPage} />
				<Route path='/products/:product_slug' component={ProductPage} />
				<Route
					path='/products/:product_slug/:variant_slug'
					component={ProductPage}
				/>
			</Switch>
		</QueryClientProvider>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
