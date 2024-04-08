import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';

import { getDashboardStatistics } from '~/api';
import { BarChart } from '~/components-admin/bar-chart';
import { Card } from '~/components-admin/card';
import { Layout } from '~/components-admin/layout';
import { RecentOrders } from '~/components-admin/recent-orders';
import { Spinner } from '~/components/spinner';

export const AdminDashboardPage: FC = () => {
	const { data: dashboardStatistics } = useQuery({
		queryKey: ['getDashboardStatistics'],
		queryFn: getDashboardStatistics,
	});

	console.log(dashboardStatistics);

	return (
		<Layout>
			<div className='flex gap-5 justify-between'>
				{dashboardStatistics ? (
					dashboardStatistics.map((card) => <Card {...card} key={card.title} />)
				) : (
					<div>
						<Spinner />
					</div>
				)}
			</div>
			<div className='pt-4 grid grid-cols-3 gap-4'>
				<BarChart />
				<RecentOrders />
			</div>
		</Layout>
	);
};
