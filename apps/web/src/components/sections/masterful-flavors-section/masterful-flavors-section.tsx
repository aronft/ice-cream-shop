import { Container } from "@/components/ui/objects/container/container";
import Image from "next/image";
import masterFulImage from "@/assets/dropping-ice-cream.png";
import { Heading } from "@/components/ui/atoms/heading/heading";

const MasterfulFlavorsSection = () => {
    return (
        <section className="">
            <Container className="flex relative py-16 flex-col column-gap-8 items-center md:flex-row-reverse md:justify-between">
                <Image
                    width={720}
                    height={504}
                    src={masterFulImage}
                    alt="dropping honey over the icecream"
                    className="aspect-[4:3] w-[50vw] max-w-2xl absolute bottom-0 md:h-full top-0 object-cover"
                />
                <Image
                    width={720}
                    height={504}
                    src={masterFulImage}
                    alt="dropping honey over the icecream"
                    className="aspect-[4:3] w-[50vw] max-w-2xl object-cover invisible"
                />
                <div className="text-center flex flex-col gap-4 md:text-start   max-w-xl ">
                    <Heading size="large" className="font-bold">
                        Masterful Flavors
                    </Heading>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
                        penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus
                        nunc.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default MasterfulFlavorsSection;
