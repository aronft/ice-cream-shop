"use client";
import { Menu } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";

interface BreadCrumpProps {
    menu: Menu[];
}

const getBreadCrump = (pathname: string, menu: Menu[]) => {
    const item = menu.find((item) => item.url === pathname);
    return item;
};

export const BreadCrump = ({ menu }: BreadCrumpProps) => {
    const pathname = usePathname();
    const breadcrump = getBreadCrump(pathname, menu);

    if (breadcrump === undefined) {
        throw new Error("Error to find the url");
    }

    return (
        <ul className="flex gap-2 items-center">
            <li className="flex items-center gap-2">
                <Link href="#">Home</Link>{" "}
                <AiOutlineRight className="text-xs text-slate-500 " fontWeight={900} />
            </li>
            <li>
                <Link href={breadcrump.url} className="text-primary-400 font-medium">
                    {breadcrump.name}
                </Link>
            </li>
        </ul>
    );
};
