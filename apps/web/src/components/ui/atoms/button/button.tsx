import { cn } from "@/lib/utils/class-name";
import React from "react";
import { linkImpactClasses } from "../link/link";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
    tone?: "secondary";
    view?: "link" | "button";
}

export const buttonImpactClasses: Record<NonNullable<ButtonProps["tone"]>, string> = {
    secondary: "bg-secondary-600 text-primary-50 py-2 px-4 rounded-md",
};

export const Button = ({
    children,
    className,
    tone = "secondary",
    view,
    ...props
}: ButtonProps) => {
    const impactClasses = view === "link" ? linkImpactClasses[tone] : buttonImpactClasses[tone];
    return (
        <button className={cn("", impactClasses, className)} {...props}>
            {children}
        </button>
    );
};
