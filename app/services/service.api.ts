import { ICar } from "../models/ICar";

const baseUrl = "http://owu.linkpc.net/carsAPI/v1/";

export const getCars = async (): Promise<ICar[]> => {
    const response = await fetch(baseUrl+'cars');
    return await response.json() as ICar[];
}

export const addCar = async (car: ICar): Promise<void> => {
    const {brand, price, year} = car;
    await fetch(baseUrl+'cars', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({brand, price, year}),
        cache: "no-store"
    });

}