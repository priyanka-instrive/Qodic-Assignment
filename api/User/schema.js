const Joi = require("joi");

const userValidationSchema = {
    createUser: {
        body: Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        }),
    },

    updateUser: {
        body: Joi.object({
            name: Joi.string().min(3).optional(),
            email: Joi.string().email().optional(),
            password: Joi.string().min(6).optional(),
        }),
    },
};

module.exports = userValidationSchema;
