import { type FC, type PropsWithChildren } from 'react';

import { Header } from '~/components-admin/header';
import { Sidebar } from '~/components-admin/sidebar';

export const Layout: FC<PropsWithChildren> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className='flex flex-row min-h-screen styled-scrollbar'>
			<Sidebar />
			<div className='flex flex-col w-full max-h-[100vh]'>
				<Header />
				<div className='bg-gray-200 p-3 overflow-y-auto overflow-hidden min-h-[calc(100vh-68px)]'>
					{children}
				</div>
			</div>
		</div>
	);
};
