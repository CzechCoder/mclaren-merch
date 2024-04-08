import { type FC } from 'react';

import { BarChart } from '~/components-admin/bar-chart';
import { Card } from '~/components-admin/card';
import { Layout } from '~/components-admin/layout';
import { RecentOrders } from '~/components-admin/recent-orders';

const cardData = [
	{ title: "This year's revenue", value: 4561, currency: '$' },
	{ title: "This month's revenue", value: 2500, currency: '$' },
	{ title: 'Total orders so far', value: 112 },
];

export const AdminDashboardPage: FC = () => {
	return (
		<Layout>
			<div className='flex gap-5 justify-between'>
				{cardData.map((card) => (
					<Card {...card} key={card.title} />
				))}
			</div>
			<div className='pt-4 grid grid-cols-3 gap-4'>
				<BarChart />
				<RecentOrders />
			</div>
		</Layout>
	);
};
