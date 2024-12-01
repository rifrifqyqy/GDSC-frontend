/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// font
			fontFamily: {
				sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			// set color
			colors: {
				primary: {
					// buatkan sampai 300
					100: '#F54748',
					200: '#F64C4C',
					300: '#F75A5A'
				},
				// buatkan setcolor untuk dark
				dark: {
					// buatkan sampai 300 dark color!
					100: '#131316',
					200: '#26262c',
					300: '#2f3037',
					400: '#4b4c52',
					500: '#6c6d73'
				},
				light: {
					// buatkan sampai 300 light color!
					100: '#F7F7F7',
					200: '#E5E5E5',
					300: '#D9D9D9',
					400: '#C4C4C4',
					500: '#A8A8A8'
				}
			}
		}
	},

	plugins: []
};
