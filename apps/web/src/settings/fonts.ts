import { Lato, Merriweather } from "next/font/google";

export const primaryFont = Merriweather({
    subsets: ["latin"],
    display: "swap",
    variable: "--primary-font",
    weight: ["400", "700"],
});

export const secondaryFont = Lato({
    subsets: ["latin"],
    display: "swap",
    variable: "--secondary-font",
    weight: ["300", "400", "700"],
});
