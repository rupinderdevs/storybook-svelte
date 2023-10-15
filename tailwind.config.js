/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				primary: {
					DEFAULT: '#55588B',
					90: '#666CFF',			
				}
			}
		}
	},
	plugins: []
};
