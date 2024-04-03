import { Header } from '~/components/admin-header';
import { Sidebar } from '~/components/admin-sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-row min-h-screen styled-scrollbar'>
			<Sidebar />
			<div className='flex flex-col w-full'>
				<Header />
				{children}
			</div>
		</div>
	);
};

export default Layout;
