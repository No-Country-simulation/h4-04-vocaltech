import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
    LEAD_HOST: string;
    LEAD_PORT: number;
    DB_URL: string;
}

const envSchema = Joi.object({
    LEAD_HOST: Joi.string().required(),
    LEAD_PORT: Joi.number().required()
}).unknown(true);

const { error, value } = envSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars = value as EnvVars;

export const envs = {
    leadHost: envVars.LEAD_HOST,
    leadPort: envVars.LEAD_PORT,
    dbUrl: envVars.DB_URL
}