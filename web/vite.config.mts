import { defineConfig } from 'vite';
import pluginTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [pluginTsconfigPaths()],

	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
			},
		},
	},
});
