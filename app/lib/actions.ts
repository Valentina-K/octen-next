import {addCar} from "@/app/services/service.api";
import {ICar} from "@/app/models/ICar";

export const createCar = async (formData: FormData): Promise<void> => {
    const car: ICar = {
        brand: (formData.get("brand") as string) ?? "",
        price: Number(formData.get("price") ?? 0),
        year: Number(formData.get("year") ?? 0),
    };
    return await addCar(car);
}