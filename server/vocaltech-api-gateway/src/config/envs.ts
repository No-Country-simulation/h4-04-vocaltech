// @prefix micro
import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
  USERS_MICROSERVICE_HOST: string;
  USERS_MICROSERVICE_PORT: number;
  LEADS_MICROSERVICE_HOST: string;
  LEADS_MICROSERVICE_PORT: number;
  DIAGNOSES_MICROSERVICE_HOST: string;
  DIAGNOSES_MICROSERVICE_PORT: number;
}

const envSchema = Joi.object({
  PORT: Joi.number().required(),
  USERS_MICROSERVICE_HOST: Joi.string().required(),
  USERS_MICROSERVICE_PORT: Joi.number().required(),
  LEADS_MICROSERVICE_HOST: Joi.string().required(),
  LEADS_MICROSERVICE_PORT: Joi.number().required(),
  DIAGNOSES_MICROSERVICE_HOST: Joi.string().required(),
  DIAGNOSES_MICROSERVICE_PORT: Joi.number().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars = value as EnvVars;

export const envs = {
  port: envVars.PORT,
  usersMicroserviceHost: envVars.USERS_MICROSERVICE_HOST,
  usersMicroservicePort: envVars.USERS_MICROSERVICE_PORT,
  leadsMicroserviceHost: envVars.LEADS_MICROSERVICE_HOST,
  leadsMicroservicePort: envVars.LEADS_MICROSERVICE_PORT,
  diagnosesMicroserviceHost: envVars.DIAGNOSES_MICROSERVICE_HOST,
  diagnosesMicroservicePort: envVars.DIAGNOSES_MICROSERVICE_PORT,
};
