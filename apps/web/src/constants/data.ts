export interface Menu {
    id: string;
    name: string;
    url: string;
}

interface Data {
    menu: Menu[];
}

const DATA: Data = {
    menu: [
        {
            id: "1",
            name: "Home",
            url: "/",
        },
        {
            id: "2",
            name: "Products",
            url: "/products",
        },
        {
            id: "3",
            name: "About us",
            url: "/about-us",
        },
    ],
};

export const getData = async (): Promise<Data> => {
    const data = await new Promise<Data>((resolve) => resolve(DATA));
    return data;
};
