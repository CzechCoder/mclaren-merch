import { Card } from '~/components/admin-card';
import Layout from '~/components/admin-layout';

export const AdminDashboardPage = () => {
	return (
		<Layout>
			<div className='bg-gray-200 p-3 overflow-y-scroll overflow-hidden'>
				<div className='flex gap-5 justify-between'>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</Layout>
	);
};
