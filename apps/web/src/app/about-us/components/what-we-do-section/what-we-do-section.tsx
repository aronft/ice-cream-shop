"use client";

import Swiper from "@/components/ui/molecules/swiper/swiper";
import { Container } from "@/components/ui/objects/container/container";
import Image from "next/image";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider, { Settings } from "react-slick";
import carouselImage1 from "@/assets/about-us/carousel-1.jpg";
import carouselImage2 from "@/assets/about-us/carousel-2.jpg";
import carouselImage3 from "@/assets/about-us/carousel-3.jpg";
import carouselImage4 from "@/assets/about-us/carousel-4.jpg";
import carouselImage5 from "@/assets/about-us/carousel-5.jpg";
import carouselImage6 from "@/assets/about-us/carousel-6.jpg";
import { Heading } from "@/components/ui/atoms/heading/heading";

const WhatWeDoSection = () => {
    const ref = useRef<Slider | null>(null);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false,
        adaptiveHeight: false,
    };

    const handleNextSlide = () => {
        ref.current?.slickNext();
    };

    const handlePrevSlide = () => {
        ref.current?.slickPrev();
    };
    return (
        <section className="py-16 bg-white">
            <Container className="flex flex-col items-center gap-8">
                <div className="flex flex-col gap-8 max-w-2xl text-center">
                    <Heading className="font-bold" size="large">
                        What We Do
                    </Heading>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
                        suscipit? Accusantium, voluptatum quae
                    </p>
                    <p>sint odio eos nesciunt expedita mollitia velit quia alias vitae iste</p>
                </div>
                <div className="flex ml-auto gap-2">
                    <button
                        className="border group border-tertiary-100 rounded-full p-2 hover:bg-tertiary-900"
                        onClick={handlePrevSlide}
                    >
                        <BsArrowLeft className="text-xl group-hover:text-white" />
                    </button>
                    <button
                        className="border group border-tertiary-100 rounded-full p-2 hover:bg-tertiary-900"
                        onClick={handleNextSlide}
                    >
                        <BsArrowRight className="text-xl group-hover:text-white" />
                    </button>
                </div>
                <Swiper ref={ref} settings={settings} className="w-full h-[500px]">
                    <Image src={carouselImage1} alt="" className="h-full object-cover" />
                    <Image src={carouselImage2} alt="" className="h-full object-cover" />
                    <Image src={carouselImage3} alt="" className="h-full object-cover" />
                    <Image src={carouselImage4} alt="" className="h-full object-cover" />
                    <Image src={carouselImage5} alt="" className="h-full object-cover" />
                    <Image src={carouselImage6} alt="" className="h-full object-cover" />
                </Swiper>
            </Container>
        </section>
    );
};

export default WhatWeDoSection;
