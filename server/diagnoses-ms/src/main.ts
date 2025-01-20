import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main-Diagnoses');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: envs.diagnosesHost,
        port: envs.diagnosesPort,
      },
    },
  );
  await app.listen();
  logger.log(
    `Main-Diagnoses is running on port ${envs.diagnosesHost}:${envs.diagnosesPort}`,
  );
}
bootstrap();
