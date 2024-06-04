import { HeroSection } from "@/components/sections/hero-section/hero-section";
import MasterfulFlavorsSection from "@/components/sections/masterful-flavors-section/masterful-flavors-section";
import { SeparatorSection } from "@/components/sections/seporator-section/separator-section";
import { PopularProducts } from "@/feauters/product/components/porpular-products/popular-products";
import { getPopularProducts } from "@/feauters/services/get-popular-products";

export default async function Page() {
    const products = await getPopularProducts();
    return (
        <div>
            <HeroSection />
            <PopularProducts products={products} />
            <SeparatorSection />
            <MasterfulFlavorsSection />
        </div>
    );
}
