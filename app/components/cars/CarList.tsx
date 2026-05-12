import {ICar} from "@/app/models/ICar";
import {getCars} from "@/app/services/service.api";


export const CarList = async () => {
    const cars: ICar[] = await getCars();
    // @ts-ignore
    const sortedCars: ICar[] = cars.sort((a,b)=>b.id - a.id);

    return (
        <div className={"flex flex-wrap gap-5 justify-center"}>{sortedCars.map((car: ICar) =>
            <div key={car.id} className="bg-lime-300 rounded-2xl mb-3 p-3">
                <h1 className={'text-2xl'}>{car.id}. {car.brand}</h1>
                <p>Year of manufacture: <b>{car.year}</b></p>
                <p>$ {car.price}</p>
            </div>
        )}
        </div>
    );
};