import Image from "next/image";
import { ProductModel } from "../../models/product.model";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { Rating } from "@/components/ui/atoms/rating/rating";
import { cn } from "@/lib/utils/class-name";

interface ProductCardProps extends ProductModel {
    titleTag: keyof Pick<JSX.IntrinsicElements, "h2" | "h3" | "h4">;
    className?: string;
}

export const ProductCard = ({
    src,
    name,
    price,
    className,
    rating,
    titleTag,
}: ProductCardProps) => {
    const TitleTag = titleTag;
    return (
        <Link
            href={`/product/${name}`}
            className={cn("inline-block", className)}
            aria-label={`Product ${name}`}
        >
            <article className="flex flex-col gap-4 p-2  rounded-xl h-full">
                <header className="pt-10 overflow-hidden ">
                    <div className="bg-primary-100  rounded-3xl">
                        <Image
                            src={src}
                            alt={name}
                            width={270}
                            height={190}
                            className="w-full h-60 object-contain scale-125 right-0   rotate-[25deg] object-top"
                        />
                    </div>
                </header>
                <footer className="flex justify-between items-start flex-grow gap-2">
                    <div className="flex flex-wrap justify-between h-full">
                        <TitleTag className="w-full font-bold text-tertiary-950">{name}</TitleTag>
                        <div className="flex items-center gap-4 mt-auto">
                            <span className="text-tertiary-950 font-medium">${price}</span>
                            <Rating rating={rating} />
                        </div>
                    </div>
                    <button className="border group border-tertiary-100 rounded-full p-2  hover:bg-tertiary-900 min-h-max min-w-max">
                        <AiOutlineShopping className="text-xl w-max group-hover:text-white" />
                    </button>
                </footer>
            </article>
        </Link>
    );
};
