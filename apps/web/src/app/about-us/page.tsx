import { BreadcrumpSection } from "@/components/common/breadcrump-section/breadcrump-section";
import { Container } from "@/components/ui/objects/container/container";
import imageAboutUs from "@/assets/about-us/about-us-image.jpg";
import Image from "next/image";
import WhatWeDoSection from "./components/what-we-do-section/what-we-do-section";
import { Heading } from "@/components/ui/atoms/heading/heading";

export default async function AboutPage() {
    return (
        <>
            <BreadcrumpSection title="Who We Are" />
            <section className="py-16 ">
                <Container className="flex flex-col md:flex-row gap-16  justify-between ">
                    <div className="flex-grow-1/2 max-w-2xl gap-8 flex flex-col justify-end md:pb-16">
                        <Heading size="large" className="font-bold">
                            Our History
                        </Heading>
                        <p className="text-md">
                            FrostyScoops, founded in 2005 by two friends, blends passion and
                            innovation into every scoop, crafting artisanal ice cream that delights
                            taste buds worldwide. Join us in savoring the sweet journey!
                        </p>
                    </div>
                    <div className="flex-grow-1/2 max-w-2xl ">
                        <Image
                            width={1280}
                            height={814}
                            src={imageAboutUs.src}
                            className="aspect-[640:407]  "
                            alt="ice cream cart"
                        />
                    </div>
                </Container>
            </section>
            <WhatWeDoSection />
        </>
    );
}
