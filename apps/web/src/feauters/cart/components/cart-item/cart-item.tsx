import Image from "next/image";
import { CartItemModel } from "../../models/cart.model";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

interface CartItemProps extends CartItemModel {}

export const CartItem = ({ id, price, product, quantity }: CartItemProps): JSX.Element => {
    return (
        <article className="flex flex-col gap-4">
            <div className="flex gap-4">
                <div className="bg-gray-100 rounded-md p-1">
                    <Image
                        src={product.src}
                        width={100}
                        height={100}
                        className="object-contain h-[100px]"
                        alt=""
                    />
                </div>
                <div>
                    <h2 className="text-lg">{product.name}</h2>
                </div>
                <div className="flex flex-col ml-auto justify-between">
                    <span className="font-medium text-lg">{price}</span>
                    <div className="flex bg-primary-50 rounded border border-primary-300">
                        <button className="py-1 px-3">
                            <AiOutlineMinus />
                        </button>
                        <span className="py-1 px-2">{quantity}</span>
                        <button className="py-1 px-3">
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            </div>
            <footer className="flex justify-end">
                <button>
                    <AiOutlineDelete className="text-xl text-gray-300 hover:text-secondary-500" />
                </button>
            </footer>
        </article>
    );
};
