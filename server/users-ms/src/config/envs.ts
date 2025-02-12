// @prefix micro
/*
import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  USER_PORT: number;
  USER_HOST: string;
  JWT_SECRET: string;
}

const envSchema = Joi.object({
  USER_PORT: Joi.number().required(),
  USER_HOST: Joi.string().required(),
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
  jwtSecret: envVars.JWT_SECRET,
};
*/

import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  USER_PORT: number;
  USER_HOST: string;
  JWT_SECRET: string;
}

const envSchema = Joi.object({
  USER_PORT: Joi.number().required(),
  USER_HOST: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env, { convert: true }); // Activar conversión automática de tipos
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Aseguramos que USER_PORT es un número
const envVars: EnvVars = {
  USER_PORT: Number(value.USER_PORT), // Conversión explícita a número
  USER_HOST: value.USER_HOST,
  JWT_SECRET: value.JWT_SECRET,
};

export const envs = {
  userPort: envVars.USER_PORT,
  userHost: envVars.USER_HOST,
  jwtSecret: envVars.JWT_SECRET,
};
