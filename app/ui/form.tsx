'use client';
import {createCar} from "@/app/services/service.api";
import Form from "next/form";
import {useForm} from 'react-hook-form';
import {ICar} from "@/app/models/ICar";

export const FormComponent = () => {
    const {register, formState: {errors, isValid}} = useForm<ICar>({mode: 'onChange'});
    return (
        <Form action={createCar} className="flex flex-col ml-auto mr-auto w-1/2 p-4">
            <div className={'w-full'}>
                <input type="text" {...register('brand',
                {
                    required: "Enter the brand",
                    pattern: {value: /^[a-zA-Zа-яА-Я0-9\s\-&]+$/, message: "Use letters, numbers or symbols -&"},
                    minLength: {value: 2, message: "The minimum length of a brand name is 2 characters"}
                })}
                        name={'brand'}
                        className={`w-full bg-gray-400 text-lg p-2 rounded-xl mb-3 outline-none ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder={'Brand'}/>
                {errors.brand && (<p className={'text-red-500 text-xs mt-1'}>{errors.brand.message}</p>)}
            </div>
            <div className={'w-full'}>
                <input type="number" {...register('price', {
                    required: "Enter the price",
                    min: {
                        value: 1, message: "The price must be greater than 0",
                    }
                })}
                       name={'price'}
                       className={'w-full bg-gray-400 text-lg p-2 rounded-xl mb-3'}
                       placeholder={'Price'}/>
                {errors.price && (<p className={'text-red-500 text-xs mt-1'}>{errors.price.message}</p>)}
            </div>
            <div className={'w-full'}>
                <input type="number" {...register('year', {
                    required: "Enter the year of manufacture",
                    min: {
                        value: 1886,
                        message: "The world's first car with a gasoline internal combustion engine was officially patented on January 29, 1886."
                    },
                    max: {value: 2026, message: "The year cannot be greater than the current one."}
                })}
                       name={'year'}
                       className={'w-full bg-gray-400 text-lg p-2 rounded-xl mb-3'}
                       placeholder={'Year'}/>
                {errors.year && (<p className={'text-red-500 text-xs mt-1'}>{errors.year.message}</p>)}
            </div>
            <button type={"submit"} disabled={!isValid}
                    className={'text-lg rounded-xl p-2 transition-all ' +
                        'disabled:bg-gray-200 ' +
                        'disabled:text-gray-600 disabled:cursor-not-allowed ' +
                        'enabled:bg-green-950 text-white enabled:cursor-pointer enabled:hover:bg-green-700'}>Submit
            </button>
        </Form>
    )
}