import Marquee from "react-fast-marquee";
import { FaIceCream } from "react-icons/fa";

export const SeparatorSection = () => {
    return (
        <section className="bg-secondary-600 py-10 rounded-tl-3xl rounded-br-3xl">
            <div className="bg-white py-0.5  -rotate-[2deg]">
                <Marquee className="" autoFill speed={250}>
                    <span className="uppercase inline-flex mx-4 text-4xl font-medium items-center  text-primary-950 gap-2 ">
                        <FaIceCream className="text-primary-500" />
                        Buy yours now
                    </span>
                </Marquee>
            </div>
        </section>
    );
};
