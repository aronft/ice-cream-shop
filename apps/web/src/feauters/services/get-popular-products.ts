import { ProductModel } from "../product/models/product.model";
import image1 from "@/assets/ice-cream-1.png";
import image2 from "@/assets/ice-cream-2.png";
import image3 from "@/assets/ice-cream-3.png";
import image4 from "@/assets/ice-cream-cone.png";

export const getPopularProducts = async () => {
    return await new Promise<ProductModel[]>((resolve) =>
        resolve([
            {
                id: "1",
                src: image1.src,
                name: "Ice Cream",
                price: 10,
                rating: 4.5,
            },
            {
                id: "2",
                src: image2.src,
                name: "Ice Cream 2",
                price: 10,
                rating: 5,
            },
            {
                id: "3",
                src: image3.src,
                name: "Ice Cream 3",
                price: 10,
                rating: 4.2,
            },
            {
                id: "4",
                src: image4.src,
                name: "Ice Cream, delicious",
                price: 10,
                rating: 4,
            },
        ])
    );
};
