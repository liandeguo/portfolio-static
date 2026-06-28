import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/:path(.*)?',
					localized: [
						['de', '/de/:path(.*)?'],
						// make sure to match the least specific path last
						['en', '/:path(.*)?']
					]
				}
			]
		})
	]
});
