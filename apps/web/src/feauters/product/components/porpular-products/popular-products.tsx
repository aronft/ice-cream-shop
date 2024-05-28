"use client";
import { Container } from "@/components/ui/objects/container/container";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "../product-card/product-card";
import image1 from "@/assets/ice-cream-1.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";

export const PopularProducts = () => {
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const ref = useRef<Slider | null>(null);

    const handleNextSlide = () => {
        ref.current?.slickNext();
    };

    const handlePrevSlide = () => {
        ref.current?.slickPrev();
    };
    return (
        <section className="py-16">
            <Container className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold">Popular Products</h2>
                    <div className="flex gap-2">
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
                </div>
                <Slider {...settings} className="" ref={ref}>
                    <ProductCard
                        titleTag={"h2"}
                        id={""}
                        src={image1.src}
                        name={"Helado muy rico"}
                        price={22}
                        rating={2}
                    />
                    <ProductCard
                        titleTag={"h2"}
                        id={""}
                        src={image1.src}
                        name={"Helado muy rico"}
                        price={22}
                        rating={2}
                    />
                    <ProductCard
                        titleTag={"h2"}
                        id={""}
                        src={image1.src}
                        name={"Helado muy rico"}
                        price={22}
                        rating={2}
                    />
                </Slider>
            </Container>
        </section>
    );
};
