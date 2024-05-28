import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { SeparatorSection } from "@/components/sections/seporator-section/separator-section";
import { PopularProducts } from "@/feauters/product/components/porpular-products/popular-products";

export default function Page(): JSX.Element {
    return (
        <div>
            <HeroSection />
            <PopularProducts />
            <SeparatorSection />
        </div>
    );
}
