"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Children, forwardRef } from "react";
import { cn } from "@/lib/utils/class-name";
import { defaultSettings } from "./swiper.config";
import "./swiper.css";

interface SwiperProps {
    settings: Settings;
    // ref: React.MutableRefObject<Slider | null>;
    children: React.ReactNode;
    className?: string;
}

const Swiper = forwardRef<Slider, SwiperProps>(function MySwiper(
    { settings, children, className },
    ref
) {
    const silderSettings: Settings = {
        ...defaultSettings,
        ...settings,
    };
    return (
        <Slider {...silderSettings} className={cn("", className)} ref={ref}>
            {Children.map(children, (child) => (
                <>{child}</>
            ))}
        </Slider>
    );
});

export default Swiper;
