// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [
		starlight({
			title: 'PortalPintar Docs',
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
