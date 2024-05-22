import { Container } from "../../ui/objects/container/container";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-tertiary-50 py-16">
            <Container className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-8 md:justify-between md:gap-8 items-center md:items-start text-center md:text-start">
                    <div className="flex flex-col gap-4">
                        <p className="text-tertiary-950 font-bold text-3xl font-serif">
                            Frosti Scoops
                        </p>
                        <p className="max-w-sm">
                            Produces only quality ingredients, tries to support socially important
                            topics and use less plastic in packaging
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-tertiary-950 font-bold text-2xl">Useful Links</p>
                        <ul className="flex flex-col gap-2 ">
                            <li>
                                <a href="#" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-tertiary-950 font-bold text-2xl">Get in Touch</p>
                        <p>Follow in our social media</p>
                        <ul className="flex flex-wrap gap-2  items-center justify-center md:justify-start">
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    className="hover:underline "
                                    aria-label="Facebook social media link"
                                >
                                    <FaFacebookF className="not-sr-only text-secondary-600" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    className="hover:underline"
                                    aria-label="Instagram social media link"
                                >
                                    <FaInstagram className="not-sr-only text-secondary-600" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="x.com"
                                    target="_blank"
                                    className="hover:underline"
                                    aria-label="Twitter social media link"
                                >
                                    <FaTwitter className="not-sr-only text-secondary-600" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-tertiary-400 my-8" />
                <p className="text-center font-medium">
                    ©{year} Frosti Scoops | All Rights Reserved
                </p>
            </Container>
        </footer>
    );
};
