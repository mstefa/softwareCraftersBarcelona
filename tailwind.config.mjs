/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				text: "#2e4057",
				accent: {
					yellow: '#F18F01',
					blue: '#048BA8',
				},
			},
			backgroundImage: {
				'head-line': "url('/img/event2024.jpeg')",
			},
			fontFamily: {
				'heading': ['Barlow Condensed', 'sans-serif'],
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
