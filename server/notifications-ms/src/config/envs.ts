// @prefix micro
import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  USER_PORT: number;
  USER_HOST: string;
  DIAGNOSES_PORT: number;
  DIAGNOSES_HOST: string;
  NOTIFICATIONS_PORT: number;
  NOTIFICATIONS_HOST: string;
  JWT_SECRET: string;
  MONGO_URL: string;
  MONGO_NOTIFICATIONS_URL: string;
}

const envSchema = Joi.object({
  USER_PORT: Joi.number().required(),
  USER_HOST: Joi.string().required(),
  DIAGNOSES_PORT: Joi.number().required(),
  DIAGNOSES_HOST: Joi.string().required(),
  NOTIFICATIONS_PORT: Joi.number().required(),
  NOTIFICATIONS_HOST: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const envVars = value as EnvVars;

export const envs = {
  userPort: envVars.USER_PORT,
  userHost: envVars.USER_HOST,
  diagnosesPort: envVars.DIAGNOSES_PORT,
  diagnosesHost: envVars.DIAGNOSES_HOST,
  notificationsPort: envVars.NOTIFICATIONS_PORT,
  notificationsHost: envVars.NOTIFICATIONS_HOST,
  jwtSecret: envVars.JWT_SECRET,
  dbUrl: envVars.MONGO_URL,
  notificationsDbUrl: envVars.MONGO_NOTIFICATIONS_URL,
};
