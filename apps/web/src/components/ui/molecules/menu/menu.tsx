import { Menu as MenuModel } from "@/constants/data";
import { cn } from "@/lib/utils/class-name";
import Link from "next/link";

interface MenuProps extends React.ComponentPropsWithoutRef<"ul"> {
    menu: MenuModel[];
}

export const Menu = ({ className, menu, ...props }: MenuProps) => {
    return (
        <ul className={cn("flex items-center gap-8", className)} {...props}>
            {menu.map((itemMenu) => (
                <li key={itemMenu.id}>
                    <Link href={itemMenu.url} aria-label={`${itemMenu.name} link`} className="py-8">
                        {itemMenu.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
