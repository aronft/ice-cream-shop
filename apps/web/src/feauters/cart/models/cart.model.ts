import { ProductModel } from "@/feauters/product/models/product.model";

export interface CartItemModel {
    id: string;
    quantity: number;
    price: number;
    product: ProductModel;
}
