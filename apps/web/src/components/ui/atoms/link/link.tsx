import { cn } from "@/lib/utils/class-name";
import { ButtonProps, buttonImpactClasses } from "../button/button";
import NextLink from "next/link";

interface LinkProps extends React.ComponentPropsWithRef<"a"> {
    tone?: ButtonProps["tone"];
    view?: "link" | "button";
}

export const linkImpactClasses: Record<NonNullable<LinkProps["tone"]>, string> = {
    secondary: "underline text-secondary-600",
};

export const Link = ({
    view = "link",
    tone = "secondary",
    className,
    children,
    href,
    ...props
}: LinkProps): JSX.Element => {
    const impactClasses = view === "link" ? linkImpactClasses[tone] : buttonImpactClasses[tone];
    if (href === undefined || href === null) {
        throw new Error("href should not be empty");
    }
    return (
        <NextLink href={href} className={cn("", impactClasses, className)} {...props}>
            {children}
        </NextLink>
    );
};
