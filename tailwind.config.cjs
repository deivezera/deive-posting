/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
			animation: {
				...defaultTheme.animation,
        fadeIn: 'fadeIn 1s ease-in-out',
      },

      // that is actual animation
      keyframes: () => ({
        fadein: {
          '100%': { opacity: '1'},
          '0%': { opacity: '0' },
        },
      }),
		},
	},
	plugins: [],
}
