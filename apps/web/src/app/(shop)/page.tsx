import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { SeparatorSection } from "@/components/sections/seporator-section/separator-section";

export default function Page(): JSX.Element {
    return (
        <div>
            <HeroSection />
            <SeparatorSection />
        </div>
    );
}
