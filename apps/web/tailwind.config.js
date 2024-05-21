/** @type {import('tailwindcss').Config} */

const sharedConfig = require("@repo/tailwind-config/tailwind.config.js");
module.exports = {
    ...sharedConfig,
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        colors: {
            primary: {
                50: "#f2f9fd",
                950: "#102f41",
            },
            secondary: {
                600: "#ca2e55",
            },
            tertiary: {
                600: "#8a6552",
            },
            transparent: "transparent",
        },
        extend: {
            fontFamily: {
                sans: ["var(--secondary-font)", "sans-serif"],
                serif: ["var(--primary-font)", "serif"],
            },
        },
    },
};
