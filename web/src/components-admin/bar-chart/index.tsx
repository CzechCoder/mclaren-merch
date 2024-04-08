import { type FC, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ChartData,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const BarChart: FC = () => {
	const [chartData, setChartData] = useState<
		ChartData<'bar', (number | [number, number] | null)[], string>
	>({
		labels: [],
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
			datasets: [
				{
					label: 'Sales $',
					data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgb(53, 162, 235, 0.4',
				},
			],
		});
		setChartOptions({
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: 'true',
					text: 'Daily revenue',
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<>
			<div className='w-full col-span-2 relative h-full m-auto p-4 border rounded-lg bg-white'>
				<Bar data={chartData} options={chartOptions} />
			</div>
		</>
	);
};
