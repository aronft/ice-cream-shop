"use client";
import { Container } from "@/components/ui/objects/container/container";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "../product-card/product-card";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import "./popular-product.css";
import { ProductModel } from "../../models/product.model";
import { Heading } from "@/components/ui/atoms/heading/heading";
import { cn } from "@/lib/utils/class-name";

interface PopularProductsProps {
    products: ProductModel[];
    className?: string;
}

export const PopularProducts = ({ products, className }: PopularProductsProps) => {
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
        <section className={cn("py-16", className)}>
            <Container className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <Heading size="large" className="font-bold">
                        Popular Products
                    </Heading>
                    <div className="flex gap-2">
                        <button
                            className="border group text-tertiary-900 border-tertiary-500 rounded-full p-2 hover:bg-tertiary-900"
                            onClick={handlePrevSlide}
                        >
                            <BsArrowLeft className="text-xl group-hover:text-white" />
                        </button>
                        <button
                            className="border group text-tertiary-900 border-tertiary-500 rounded-full p-2 hover:bg-tertiary-900"
                            onClick={handleNextSlide}
                        >
                            <BsArrowRight className="text-xl group-hover:text-white" />
                        </button>
                    </div>
                </div>
                <Slider {...settings} className="" ref={ref}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            className="h-full"
                            titleTag={"h2"}
                            id={product.id}
                            src={product.src}
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                        />
                    ))}
                </Slider>
            </Container>
        </section>
    );
};
