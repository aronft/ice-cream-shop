import { cn } from "@/lib/utils/class-name";
import Image from "next/image";
import React from "react";

interface ProductImage extends React.ComponentPropsWithoutRef<"img"> {
    width: number;
    height: number;
    src: string;
    alt: string;
}

export const ProductImage = ({ className, width, height, src, alt, ...props }: ProductImage) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...props}
            className={cn(
                "w-full h-60 object-contain scale-125 right-0   rotate-[25deg] object-top",
                className
            )}
        />
    );
};
