import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config/envs';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main-Notifications');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: envs.notificationsHost,
        port: envs.notificationsPort,
      },
    },
  );
  await app.listen();
  logger.log(
    `Main-Notifications is running on port ${envs.notificationsHost}:${envs.notificationsPort}`,
  );
}
bootstrap();
