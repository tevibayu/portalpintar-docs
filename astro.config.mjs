// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.portalpintar.id',
	output: 'static',
	integrations: [
		sitemap(),
		starlight({
			title: 'PortalPintar Docs',
			favicon: '/favicon.svg',
			head: [
				{
					tag: 'script',
					content: `
						(function() {
							if (!localStorage.getItem('starlight-theme')) {
								localStorage.setItem('starlight-theme', 'light');
							}
						})();
					`,
				},
				{
					tag: 'meta',
					attrs: {
						name: 'viewport',
						content: 'width=device-width, initial-scale=0.75, maximum-scale=0.8, user-scalable=no, viewport-fit=cover',
					},
				},
			],
			customCss: [
				'./src/styles/custom.css'
			],
			components: {
				TableOfContents: './src/components/TableOfContents.astro',
				MobileTableOfContents: './src/components/MobileTableOfContents.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/tevibayu/portalpintar-docs' }
			],
			sidebar: [
				{
					label: 'Autentikasi & Onboarding',
					items: [{ autogenerate: { directory: 'auth' } }],
				},
				{
					label: 'Dashboard Admin & Owner',
					items: [{ autogenerate: { directory: 'dashboard' } }],
				},
				{
					label: 'Portal Tutor / Tentor',
					items: [{ autogenerate: { directory: 'tutor' } }],
				},
				{
					label: 'Portal Siswa & Wali',
					items: [{ autogenerate: { directory: 'student' } }],
				},
				{
					label: 'Playground Interaktif',
					items: [{ autogenerate: { directory: 'playground' } }],
				},
				{
					label: 'Halaman Publik',
					items: [{ autogenerate: { directory: 'public' } }],
				},
			],
		}),
	],
});
