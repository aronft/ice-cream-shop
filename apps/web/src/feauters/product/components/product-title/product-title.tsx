import { cn } from "@/lib/utils/class-name";
import { ProductModel } from "../../models/product.model";

interface ProductTitleProps {
    title: ProductModel["name"];
    titleTag: keyof Pick<JSX.IntrinsicElements, "h2" | "h3" | "h4">;
    className?: string;
}

export const ProductTitle = ({ title, titleTag, className, ...props }: ProductTitleProps) => {
    const TitleTag = titleTag;
    return (
        <TitleTag className={cn("w-full font-bold text-tertiary-950", className)} {...props}>
            {title}
        </TitleTag>
    );
};
