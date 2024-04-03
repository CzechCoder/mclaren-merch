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
import { AdminDashboardPage } from './pages/admin-dash';
import { AdminProductsPage } from './pages/admin-products';
import { AdminOrdersPage } from './pages/admin-orders';
import { AdminCustomersPage } from './pages/admin-customers';

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

				<Route path='/admin' component={AdminDashboardPage} />
				<Route path='/admin/products' component={AdminProductsPage} />
				<Route path='/admin/orders' component={AdminOrdersPage} />
				<Route path='/admin/customers' component={AdminCustomersPage} />
			</Switch>
		</QueryClientProvider>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
