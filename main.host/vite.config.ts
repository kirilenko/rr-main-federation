import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  build: {
    cssCodeSplit: false,
    minify: mode === 'production',
    modulePreload: false,
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'main',
      remotes: {
        'remote-shared-ui': 'http://localhost:3002/assets/remote-entry.js',
        'remote-widgets-wbs': 'http://localhost:3001/assets/remote-entry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    // tsconfigPaths() from vite-tsconfig-paths does not work with federation
  ],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@entities': '/src/entities',
      '@pages': '/src/pages',
      '@shared': '/src/shared',
      '@widgets': '/src/widgets',
    },
  },
}))
