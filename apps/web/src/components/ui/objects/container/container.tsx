import { HTMLAttributes } from "react";
import { cn } from "../../../../lib/utils/class-name";

interface ContainerProps extends HTMLAttributes<{}> {
    tag?: keyof Pick<JSX.IntrinsicElements, "section" | "div" | "main" | "article">;
}

export const Container = ({ tag = "div", children, className, ...props }: ContainerProps) => {
    const Tag = tag;
    return (
        <Tag className={cn("container px-8 md:px-0 mx-auto", className)} {...props}>
            {children}
        </Tag>
    );
};
