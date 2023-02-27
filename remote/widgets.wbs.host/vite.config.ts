import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => ({
	plugins: [
		react(),
		federation({
			name: "remote-widgets-wbs",
			filename: "remote-entry.js",
			exposes: {
				'./wbs': './src/widgets/wbs'
			},
			remotes: {
				'remote-shared-ui': 'http://localhost:3002/assets/remote-entry.js',
			},
			shared: ['react','react-dom']
		})
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
