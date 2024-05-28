import Image from "next/image";
import { ProductModel } from "../../models/product.model";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

interface ProductCardProps extends ProductModel {
    titleTag: keyof Pick<JSX.IntrinsicElements, "h2" | "h3" | "h4">;
}

export const ProductCard = ({ src, name, price, rating, titleTag }: ProductCardProps) => {
    const TitleTag = titleTag;
    return (
        <Link href={`/product/${name}`}>
            <article className="flex flex-col gap-4 p-2  rounded-xl">
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
                <footer className="flex justify-between items-start">
                    <div className="flex flex-wrap">
                        <TitleTag className="w-full font-bold text-tertiary-950">{name}</TitleTag>
                        <span className="text-tertiary-950 font-medium">${price}</span>
                        <span>{rating}</span>
                    </div>
                    <button className="border group border-tertiary-100 rounded-full p-2 hover:bg-tertiary-900">
                        <AiOutlineShopping className="text-2xl group-hover:text-white" />
                    </button>
                </footer>
            </article>
        </Link>
    );
};
