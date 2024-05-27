import "./globals.css";
import type { Metadata } from "next";

import { primaryFont, secondaryFont } from "../settings/fonts";
import { Footer } from "../components/common/footer/footer";
import { Header } from "@/components/common/header/header";

export const metadata: Metadata = {
    title: "Create Turborepo",
    description: "Generated by create turbo",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body
                className={`${primaryFont.variable} ${secondaryFont.variable} font-sans text-primary-950  bg-primary-50 flex flex-col justify-between`}
            >
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
