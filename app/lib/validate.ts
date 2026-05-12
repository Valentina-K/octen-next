import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const schema = Joi.object({
    brand: Joi.string().min(2).max(30).required().
    pattern( /^[a-zA-Zа-яА-Я0-9\s\-&]+$/).messages({
        'string.min': 'The minimum length of a brand name is 2 characters',
        'any.required': 'Enter the brand',
        'string.pattern': 'Use letters, numbers or symbols -&',
    }),
    price: Joi.number().min(1).required().messages({
        'number.min': 'he price must be greater than 0',
        'any.required': 'Enter the price',
    }),
    year: Joi.number().min(1886).max(2026).required().messages({
        'number.min': 'The world\'s first car with a gasoline internal combustion engine was officially patented on January 29, 1886.',
        'number.max': 'The year cannot be greater than the current one.',
        'any.required': 'Enter the year of manufacture',
    })
});

export default joiResolver(schema);