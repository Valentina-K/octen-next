import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const schema = Joi.object({
    brand: Joi.string().min(1).max(20).required().
    pattern( /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        'string.min': 'The minimum length of a brand name is 1 character',
        'string.max': 'The maximum length of a brand name is 20 characters',
        'any.required': 'Enter the brand',
        'string.pattern': 'Use letters, numbers or symbols -&',
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'The price must be greater than 0',
        'any.required': 'Enter the price',
    }),
    year: Joi.number().min(1990).max(2026).required().messages({
        'number.min': 'The year must be greater than 1990',
        'number.max': 'The year cannot be greater than the current one.',
        'any.required': 'Enter the year of manufacture',
    })
});

export default joiResolver(schema);