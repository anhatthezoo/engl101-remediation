const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
				'serif': ['IBM Plex Serif', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: []
};
