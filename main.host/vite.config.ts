import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
	plugins: [
		react(),
		federation({
			name: 'main',
			remotes: {
				'remote-widgets-wbs': 'http://localhost:3001/assets/remote-entry.js',
			},
			shared: ['react','react-dom'],
		}),
		// tsconfigPaths() from vite-tsconfig-paths does not work with federation
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: mode === 'production',
		cssCodeSplit: false
	},
	resolve: {
		alias: {
			'@app': '/src/app',
			'@entities': '/src/entities',
			'@pages': '/src/pages',
			'@shared': '/src/shared',
		  '@widgets': '/src/widgets',
		},
	},
}));
