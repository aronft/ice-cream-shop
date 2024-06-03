"use client";
import { SVGProps } from "@/lib/models/svg.model";
import { cn } from "@/lib/utils/class-name";
import { useId } from "react";

interface StarProps extends SVGProps {
    percentage?: string;
}

export const RatingIcon = ({ percentage = "100%", className, ...props }: StarProps) => {
    const id = useId();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height={"1em"}
            className={cn("", className)}
            {...props}
        >
            <defs>
                <linearGradient id={id}>
                    <stop offset={percentage} stopColor="currentColor" />
                    <stop stopColor="#E2E2E2" />
                </linearGradient>
            </defs>
            <path
                fill={`url(#${id})`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
            />
        </svg>
    );
};