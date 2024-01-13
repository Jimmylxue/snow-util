import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: /^~/,
				replacement: '',
			},
			{
				find: '@/types',
				replacement: resolve(__dirname, 'src/types'),
			},
			{
				find: '@/utils',
				replacement: resolve(__dirname, 'src/utils'),
			},
			{
				find: '@/hooks',
				replacement: resolve(__dirname, 'src/hooks'),
			},
			{
				find: '@/stores',
				replacement: resolve(__dirname, 'src/stores'),
			},
			{
				find: '@/core',
				replacement: resolve(__dirname, 'src/core'),
			},
			{
				find: '@/components',
				replacement: resolve(__dirname, 'src/components'),
			},
			{
				find: '@/config',
				replacement: resolve(__dirname, 'src/config'),
			},
			{
				find: '@/api',
				replacement: resolve(__dirname, 'src/api'),
			},
			{
				find: '@/pages',
				replacement: resolve(__dirname, 'src/pages'),
			},
			{
				find: '@/assets',
				replacement: resolve(__dirname, 'src/assets'),
			},
		],
	},
})
