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
        extend: {
            fontFamily: {
                sans: ["var(--secondary-font)", "sans-serif"],
                serif: ["var(--primary-font)", "serif"],
            },
        },
    },
};
