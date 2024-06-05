import { cn } from "@/lib/utils/class-name";
import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
    tag?: keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4">;
    size?: "small" | "medium" | "large" | "big";
}

const sizesClasses: Record<NonNullable<HeadingProps["size"]>, string> = {
    big: "text-6xl",
    large: "text-5xl",
    medium: "text-4xl",
    small: "text-3xl",
};

export const Heading = ({
    tag = "h1",
    className,
    children,
    size = "medium",
    ...props
}: HeadingProps): JSX.Element => {
    const Heading = tag;
    return (
        <Heading className={cn("", sizesClasses[size], className)} {...props}>
            {children}
        </Heading>
    );
};
