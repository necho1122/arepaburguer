import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#F48E28', // naranja del botón Book Table
			},
		},
	},
	plugins: [],
};

export default config;
