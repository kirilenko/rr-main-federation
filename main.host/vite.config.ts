import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

export default defineConfig(async ({ command }) => ({
	plugins: [
		react(),
		federation({
			name: 'main',
			remotes: {
				'remote-widgets-wbs': 'http://localhost:3001/assets/remote-entry.js',
			},
			shared: ['react','react-dom'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	},
}));
