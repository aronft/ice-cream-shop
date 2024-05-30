import { render, screen } from "@testing-library/react";
import { PopularProducts } from "./popular-products";
import { ProductModel } from "../../models/product.model";
import image from "@/assets/ice-cream-1.png";

const product: ProductModel = {
    id: "1",
    src: image.src,
    name: "Ice Cream",
    price: 10,
    rating: 4,
};

describe("Test Product Card ", () => {
    it("should list courses", async () => {
        render(<PopularProducts products={[product]} />);

        const productLink = await screen.findByRole("link", { name: `Product ${product.name}` });
        expect(productLink).toBeInTheDocument();
    });
});
