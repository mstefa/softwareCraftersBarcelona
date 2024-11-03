/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1A202C', // Customize primary colors
				secondary: '#2D3748',
				accent: '#38B2AC',
			},
			backgroundImage: {
				'head-line': "url('public/img/event2024.jpeg')",
			},
			fontSize: {
				'xs': '.75rem',
				'sm': '.875rem',
				'base': '1rem',
				'lg': '1.125rem',
				'xl': '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
			},
			spacing: {
				'72': '18rem',
				'84': '21rem',
				'96': '24rem',
			},
		},
	},
	plugins: [],
}
