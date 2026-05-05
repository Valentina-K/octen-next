'use server';
import { ICar } from "../models/ICar";

const baseUrl = "http://owu.linkpc.net/carsAPI/v1/";

export const getCars = async (): Promise<ICar[]> => {
    const response = await fetch(baseUrl+'cars');
    return await response.json() as ICar[];
}

export const createCar = async (formData: FormData): Promise<void> => {
    const brand = formData.get("brand");
    const price = formData.get("price");
    const year = formData.get("year");
    await fetch(baseUrl+'cars', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({brand, price, year}),
    });

}