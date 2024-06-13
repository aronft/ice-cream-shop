import { Container } from "@/components/ui/objects/container/container";
import { Logo } from "../logo/logo";
import { getData } from "@/constants/data";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { Menu } from "./menu";
import { MobileMenu } from "./mobile-menu";
import { CartHover } from "@/feauters/cart/components/cart-hover/cart-hover";

export const Header = async () => {
    const { menu } = await getData();
    return (
        <header className=" z-10  bg-white fixed left-0 right-0 h-24">
            <Container className="lg:flex hidden   justify-between items-center h-full  ">
                <Logo />
                <Menu menu={menu} />
                <div className="flex items-center  gap-4 h-full">
                    <AiOutlineUser className="text-primary-950" />
                    {/* <AiOutlineShopping className="text-primary-950" /> */}
                    <CartHover />
                </div>
            </Container>

            <MobileMenu menu={menu} />
        </header>
    );
};
