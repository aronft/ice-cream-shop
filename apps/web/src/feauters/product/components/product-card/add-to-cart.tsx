"use client";

import { useCartStore } from "@/feauters/cart/store/cart.store";
import { ProductModel } from "../../models/product.model";
import { AiOutlineShopping } from "react-icons/ai";
import { CartItemModel } from "@/feauters/cart/models/cart.model";
import { MouseEvent } from "react";
import { getRandomUUID } from "@/lib/utils/randomuuid";

export const AddToCart = ({ product }: { product: ProductModel }): JSX.Element => {
    const addItemToCart = useCartStore((state) => state.addItemToCart);
    const addToCart = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const itemCart: CartItemModel = {
            id: getRandomUUID(),
            quantity: 1,
            product: product,
        };
        addItemToCart(itemCart);
    };
    return (
        <button
            className="border group border-tertiary-100 rounded-full p-2  hover:bg-tertiary-900 min-h-max min-w-max"
            onClick={addToCart}
        >
            <AiOutlineShopping className="text-xl w-max group-hover:text-white" />
        </button>
    );
};
