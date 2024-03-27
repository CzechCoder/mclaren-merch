import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC } from 'react';
import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient();

const App: FC = () => {
	return <div>Hello world</div>;
};

createRoot(document.getElementById('root')!).render(<App />);
