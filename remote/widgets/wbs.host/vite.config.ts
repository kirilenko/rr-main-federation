import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ command }) => ({
	plugins: [
		react(),
		federation({
			name: "remote-widgets-wbs",
			filename: "remote-entry.js",
			exposes: {
				'./wbs': './src/widgets/wbs'
			},
			shared: ['react','react-dom']
		})
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
}));
