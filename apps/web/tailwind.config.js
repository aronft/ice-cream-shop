/** @type {import('tailwindcss').Config} */

const sharedConfig = require("@repo/tailwind-config/tailwind.config.js");
const colors = require("tailwindcss/colors");

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
                100: "#e4f2fa",
                200: "#c3e5f4",
                300: "#8ed0eb",
                400: "#52b8de",
                500: "#2ba0cc",
                600: "#1c81ad",
                700: "#18678c",
                800: "#185774",
                900: "#194a61",
                950: "#112f40",
            },
            secondary: {
                50: "#fef2f3",
                100: "#fde6e9",
                200: "#f9d2d7",
                300: "#f5acb7",
                400: "#ee7e91",
                500: "#e3506d",
                600: "#ca2e55",
                700: "#ae2248",
                800: "#921f43",
                900: "#7d1e3e",
                950: "#450c1e",
            },
            tertiary: {
                50: "#f6f3f0",
                100: "#e8e2d9",
                200: "#d3c6b5",
                300: "#baa28a",
                400: "#a68569",
                500: "#97745b",
                600: "#8a6552",
                700: "#684b40",
                800: "#59403a",
                900: "#4e3935",
                950: "#2c1e1c",
            },
            transparent: "transparent",
            white: "#fff",
            amber: colors.amber,
            slate: colors.slate,
        },
        extend: {
            fontFamily: {
                sans: ["var(--secondary-font)", "sans-serif"],
                serif: ["var(--primary-font)", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
            },
            fontSize: {
                xs: "var(--fs-xs)",
                sm: "var(--fs-sm)",
                base: "var(--fs-base)",
                md: "var(--fs-md)",
                lg: "var(--fs-lg)",
                xl: "var(--fs-xl)",
                xl: "var(--fs-xl)",
                "2xl": [
                    "var(--fs-2xl)",
                    {
                        lineHeight: "1.3em",
                    },
                ],
                "3xl": [
                    "var(--fs-3xl)",
                    {
                        lineHeight: "1.3em",
                    },
                ],
                "4xl": [
                    "var(--fs-4xl)",
                    {
                        lineHeight: "1.3em",
                    },
                ],
                "5xl": [
                    "var(--fs-5xl)",
                    {
                        lineHeight: "1.3em",
                    },
                ],
                "6xl": [
                    "var(--fs-6xl)",
                    {
                        lineHeight: "1.3em",
                    },
                ],
                "7xl": "var(--fs-7xl)",
                "8xl": "var(--fs-8xl)",
                "9xl": "var(--fs-9xl)",
            },
        },
    },
};
