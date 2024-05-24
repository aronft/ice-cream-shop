"use client";

import { Menu as MenuModel } from "@/constants/data";
import { cn } from "@/lib/utils/class-name";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps extends React.ComponentPropsWithoutRef<"ul"> {
    menu: MenuModel[];
}

export const Menu = ({ className, menu, ...props }: MenuProps) => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <ul className={cn("flex items-center gap-8", className)} {...props}>
            {menu.map((itemMenu) => (
                <li key={itemMenu.id} className="relative">
                    <Link
                        href={itemMenu.url}
                        aria-label={`${itemMenu.name} link`}
                        className="inline-block py-8"
                    >
                        {itemMenu.name}
                        <span
                            className={cn(
                                "border-b-2 w-full border-tertiary-950 absolute left-0 bottom-0 hidden",
                                { block: pathname === itemMenu.url }
                            )}
                        ></span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
