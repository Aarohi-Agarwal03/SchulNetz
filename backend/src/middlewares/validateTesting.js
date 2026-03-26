import Joi from 'joi';
import {testingSave} from "../controllers/testing.controller.js";

const testingSaveSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(50).required(),
    middleName: Joi.string().alphanum().min(3).max(50).allow(null, ""),   // camelCase + allow empty
    lastName: Joi.string().alphanum().min(3).max(50).required(),
});

const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }
        next();
    };
};

export const validateSaveTesting = validate(testingSaveSchema);