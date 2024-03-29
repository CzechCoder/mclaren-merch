import { Header } from '~/components/header';

export const HomePage = () => {
	return (
		<div>
			<Header />
			<h1 className='text-xl font-bold underline text-purple-500'>
				Welcome to the shop
			</h1>
			<div className='h-96 border-2'>Shop</div>
			<div className='h-96 border-2'>Shop</div>
			<div className='h-96 border-2'>Shop</div>
			<div className='h-96 border-2'>Shop</div>
			<div className='h-96 border-2'>Shop</div>
		</div>
	);
};
