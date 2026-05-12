'use client';

import Form from "next/form";
import {useForm} from 'react-hook-form';
import {ICar} from "@/app/models/ICar";
import {createCar} from "@/app/actions/actions";
import schema from '@/app/lib/validate';

export const FormComponent = () => {
    const {register, formState: {errors, isValid}} = useForm<ICar>({mode: 'onChange', resolver: schema});
    return (
        <Form action={createCar} className="flex flex-col ml-auto mr-auto w-1/2 p-4">
            <div className={'w-full'}>
                <input type="text" {...register('brand',
                )}
                        name={'brand'}
                        className={`w-full bg-gray-400 text-lg p-2 rounded-xl mb-3 outline-none ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder={'Brand'}/>
                {errors.brand && (<p className={'text-red-500 text-xs mt-1'}>{errors.brand.message}</p>)}
            </div>
            <div className={'w-full'}>
                <input type="number" {...register('price', )}
                       name={'price'}
                       className={'w-full bg-gray-400 text-lg p-2 rounded-xl mb-3'}
                       placeholder={'Price'}/>
                {errors.price && (<p className={'text-red-500 text-xs mt-1'}>{errors.price.message}</p>)}
            </div>
            <div className={'w-full'}>
                <input type="number" {...register('year', )}
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