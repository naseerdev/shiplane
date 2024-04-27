/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "selector",
	theme: {
		extend: {
			animation: {
				"infinite-scroll": "infinite-scroll 25s linear infinite",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
			colors: {
				white: "#ffffff",
				primary: "#6940DA",
				main: "#0E1126",
			},
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans],
				"gilroy-bold": ["Gilroy-Bold", ...defaultTheme.fontFamily.sans],
				"gilroy-light": ["Gilroy-light", ...defaultTheme.fontFamily.sans],
				"gilroy-regular": ["Gilroy-regular", ...defaultTheme.fontFamily.sans],
				"gilroy-medium": ["Gilroy-medium", ...defaultTheme.fontFamily.sans],
				"gilroy-semibold": ["Gilroy-semibold", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase(
				{
					"@font-face": {
						fontFamily: "Gilroy-regular",
						src: "url(/src/lib/fonts/Gilroy-Regular.ttf)",
					},
				},
				{
					"@font-face": {
						fontFamily: "Gilroy-Bold",
						src: "url(/src/lib/fonts/Gilroy-Bold.ttf)",
					},
				},
				{
					"@font-face": {
						fontFamily: "Gilroy-light",
						src: "url(/src/lib/fonts/Gilroy-Light.ttf)",
					},
				},
				{
					"@font-face": {
						fontFamily: "Gilroy-medium",
						src: "url(/src/lib/fonts/Gilroy-Medium.ttf)",
					},
				},
				{
					"@font-face": {
						fontFamily: "Gilroy-semibold",
						src: "url(/src/lib/fonts/Gilroy-SemiBold.ttf)",
					},
				},
			);
		}),
	],
};
