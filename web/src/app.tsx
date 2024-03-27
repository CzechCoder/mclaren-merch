import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const queryClient = new QueryClient();

const App: FC = () => {
	return (
		<h1 className='text-xl font-bold underline text-purple-500'>
			Hello world again
		</h1>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
