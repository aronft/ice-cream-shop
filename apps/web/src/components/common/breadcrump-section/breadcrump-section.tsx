import { BreadCrump } from "@/components/ui/molecules/breadcrump/breadcrump";
import { Container } from "@/components/ui/objects/container/container";
import { getData } from "@/constants/data";

import Line from "@/assets/line.svg";

interface BreadCrumpProps {
    title?: string;
}

export const BreadcrumpSection = async ({ title }: BreadCrumpProps) => {
    const { menu } = await getData();
    return (
        <section className="py-10 relative overflow-hidden bg-primary-50-50">
            <div className="w-[40%] absolute left-0 h-full top-0 bg-gradient-radial from-primary-100 to-primary-50"></div>
            <div className="w-[40%] absolute right-0 h-full top-0 bg-gradient-radial from-primary-100 to-primary-50"></div>
            <Line className="absolute w-72 right-0 -top-9 text-primary-300" />
            <Container className="flex flex-col gap-4 relative">
                {title && <h1 className="text-3xl  font-bold">{title}</h1>}
                <BreadCrump menu={menu} />
            </Container>
        </section>
    );
};
