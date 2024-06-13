import { create } from "zustand";
import { CartItemModel } from "../models/cart.model";
import { devtools, persist } from "zustand/middleware";

interface CartStore {
    cart: CartItemModel[];
    addItemToCart: (item: CartItemModel) => void;
    removeItem: (id: CartItemModel["id"]) => void;
    getTotalItems: () => number;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (set, get) => ({
                cart: [],
                addItemToCart: (item) => {
                    const { cart } = get();
                    const productInCart = cart.find(
                        (cartItem) => cartItem.product.id === item.product.id
                    );
                    if (!productInCart) {
                        set({ cart: [...cart, item] });
                        return;
                    }
                    const updatedCart = cart.map((cartItem) => {
                        if (cartItem.product.id === item.product.id) {
                            return { ...cartItem, quantity: cartItem.quantity + item.quantity };
                        }
                        return cartItem;
                    });
                    set({ cart: updatedCart });
                },
                removeItem: (id) => {
                    const { cart } = get();
                    const cartWithProductDeleted = cart.filter((item) => item.id !== id);

                    set({ cart: cartWithProductDeleted });
                },
                getTotalItems: () => {
                    const { cart } = get();
                    return cart.reduce((total, item) => {
                        total += item.quantity * item.product.price;
                        return total;
                    }, 0);
                },
                clearCart: () => {
                    set({ cart: [] });
                },
            }),
            { name: "" }
        )
    )
);
