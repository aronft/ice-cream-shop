import { cn } from "@/lib/utils/class-name";

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <span className={cn("text-tertiary-950 font-bold text-xl font-serif", className)}>
            Frosty Scoops
        </span>
    );
};
