import * as Joi from 'joi';

export default Joi.object({
    API_KEY: Joi.string().required(),
    API_SECRET: Joi.string().required(),
    DATABASE: Joi.string()
});