export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className=" ">
            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-tertiary-600 font-bold text-2xl">Quick Links</p>
                    <ul className="flex flex-col gap-2 ">
                        <li>
                            <a href="#">Shop now</a>
                        </li>
                        <li>
                            <a href="#">Consumer Information</a>
                        </li>
                        <li>
                            <a href="#">Locations</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-tertiary-600 font-bold text-2xl">Follow</p>
                    <ul className="flex flex-col gap-2 ">
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-tertiary-600 my-4" />
            <p className="text-center">©{year} Frosti Scoops | All Rights Reserved</p>
        </footer>
    );
};
