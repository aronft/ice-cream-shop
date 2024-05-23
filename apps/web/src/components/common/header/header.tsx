import { Container } from "@/components/ui/objects/container/container";
import { Logo } from "../logo/logo";
import { Menu } from "@/components/ui/molecules/menu/menu";
import { getData } from "@/constants/data";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

export const Header = async () => {
    const { menu } = await getData();
    return (
        <header className="">
            <Container className="flex justify-between items-center border-b  border-tertiary-400">
                <Logo />

                <Menu menu={menu} />
                <div className="flex gap-4">
                    <AiOutlineUser className="text-primary-950" />
                    <AiOutlineShopping className="text-primary-950" />
                </div>
            </Container>
        </header>
    );
};
