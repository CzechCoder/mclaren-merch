export const CustomerTab = ({ customer }: { customer: Customer }) => {
	return (
		<li className='bg-gray-100 hover:bg-gray-200 auto-cols-min rounded-lg my-3 p-2 grid md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-5 grid-cols-2 items-center justify-between'>
			<p className='pl-4'>{customer.name}</p>
			<p>{customer.email}</p>
			<p className='text-gray-600 sm:text-left text-right'>
				{customer.number_of_orders}
			</p>
		</li>
	);
};
