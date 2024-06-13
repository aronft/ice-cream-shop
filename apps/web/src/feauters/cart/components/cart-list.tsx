import { CartItemModel } from "../models/cart.model";
import { CartItem } from "./cart-item/cart-item";

interface CartListProps {
    items: CartItemModel[];
}

export const CartList = ({ items }: CartListProps): JSX.Element => {
    return (
        <ul className="flex flex-col gap-4">
            {items.map((item) => (
                <li key={item.id}>
                    <CartItem id={item.id} quantity={item.quantity} product={item.product} />
                </li>
            ))}
        </ul>
    );
};
