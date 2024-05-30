"use client";

import { Container } from "@/components/ui/objects/container/container";
import { Menu as MenuModel } from "@/constants/data";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { Logo } from "../logo/logo";
import { cn } from "@/lib/utils/class-name";

interface MenuMobileProps {
    menu: MenuModel[];
}

export const MobileMenu = ({ menu }: MenuMobileProps) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="lg:hidden bg-white fixed w-full h-auto border-tertiary-400 border-b">
            <Container className=" lg:hidden flex left-0 right-0 py-4 justify-between items-center   ">
                {!showMenu ? (
                    <AiOutlineMenu onClick={() => setShowMenu(!showMenu)} />
                ) : (
                    <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
                )}
                <Logo className="text-base" />
                <div className="flex gap-2">
                    <AiOutlineUser className="text-primary-950" />
                    <AiOutlineShopping className="text-primary-950" />
                </div>
            </Container>
            <div
                className={cn("bg-white absolute top-full left-0 right-0  py-4 overflow-hidden", {
                    hidden: !showMenu,
                })}
            >
                <Container>
                    <ul className="flex flex-col gap-4">
                        {menu.map((itemMenu) => (
                            <li key={itemMenu.id}>
                                <Link href={itemMenu.url}>{itemMenu.name}</Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </div>
    );
};
