import { Container } from "@/components/ui/objects/container/container";
import Image from "next/image";
import iceCreamRight from "@/assets/ice-cream-cone.png";
import { BgStrawbarry } from "@/components/illustrations/bg-strawbarry";
import { Link } from "@/components/ui/atoms/link/link";
import { Button } from "@/components/ui/atoms/button/button";

export const HeroSection = () => {
    return (
        <section className="pb-16  relative overflow-hidden">
            <Container className="flex gap-8 flex-col md:flex-row-reverse justify-center relative items-centerpt-16 lg:justify-between pt-16 items-center">
                <div className="relative">
                    <BgStrawbarry className="absolute bottom-0 left-0 scale-[2.5]" />
                    <Image
                        src={iceCreamRight}
                        width={525}
                        alt=""
                        className="-rotate-45 max-w-sm "
                    />
                </div>
                <div className="relative  max-w-max">
                    <div className="relative flex flex-col gap-8  flex-1  justify-center items-center text-center lg:text-start lg:items-start">
                        <h1 className="text-6xl font-bold">
                            Welcome To{" "}
                            <span className="text-secondary-600 block text-7xl">
                                Frosty Scoops!
                            </span>
                        </h1>
                        <p className="leading-relaxed max-w-xl">
                            Welcome to Frosty Scoops! Enjoy our delicious, hand-crafted ice cream in
                            a variety of flavors. Treat yourself today!
                        </p>
                        <Link href="#" className="" view="button">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};
