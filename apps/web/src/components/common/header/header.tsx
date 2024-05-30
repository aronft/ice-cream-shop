import { Container } from "@/components/ui/objects/container/container";
import { Logo } from "../logo/logo";
import { getData } from "@/constants/data";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { Menu } from "./menu";
import { MobileMenu } from "./mobile-menu";

export const Header = async () => {
    const { menu } = await getData();
    return (
        <header className=" z-10  bg-white h-auto fixed left-0 right-0">
            <Container className="lg:flex hidden   justify-between items-center   ">
                <Logo />
                <Menu menu={menu} />
                <div className="flex gap-4">
                    <AiOutlineUser className="text-primary-950" />
                    <AiOutlineShopping className="text-primary-950" />
                </div>
            </Container>

            <MobileMenu menu={menu} />
        </header>
    );
};
