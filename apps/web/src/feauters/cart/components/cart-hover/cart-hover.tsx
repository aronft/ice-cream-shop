"use client";

import { Button } from "@/components/ui/atoms/button/button";
import { Heading } from "@/components/ui/atoms/heading/heading";
import { cn } from "@/lib/utils/class-name";
import { useState } from "react";
import { AiOutlineClose, AiOutlineShopping } from "react-icons/ai";
import { CartList } from "../cart-list";

interface CartHoverProps {
    className?: string;
}

export const CartHover = ({ className }: CartHoverProps): JSX.Element => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="relative h-full flex items-center">
            <AiOutlineShopping className="text-primary-950" onClick={() => setIsActive(true)} />
            <div className={cn("absolute right-0 top-full hidden", { block: isActive }, className)}>
                <div className="w-dvw h-dvh fixed left-0 top-0 right-0 bg-slate-500/50"></div>
                <div className="rounded-tl-md rounded-bl-md  bg-white fixed top-0 left-0 right-0 h-dvh w-dvw md:w-1/2 md:left-auto xl:w-[30vw]">
                    <header className="p-4 border-b border-slate-500 flex justify-between items-center">
                        <Heading tag="h2" className="font-medium text-lg">
                            My cart (3)
                        </Heading>
                        <AiOutlineClose className="text-lg" onClick={() => setIsActive(false)} />
                    </header>
                    <div className="p-4 flex flex-col ">
                        <CartList items={[]} />
                    </div>
                    <footer className="p-4">
                        <Button className="w-full">View all</Button>
                    </footer>
                </div>
            </div>
        </div>
    );
};
