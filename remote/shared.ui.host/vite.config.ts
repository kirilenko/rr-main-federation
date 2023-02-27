import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => ({
	plugins: [
		react(),
		federation({
			name: "remote-shared-ui",
			filename: "remote-entry.js",
			exposes: {
				'./ui': './src/shared/ui'
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
