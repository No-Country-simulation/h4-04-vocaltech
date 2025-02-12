import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications/notifications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config/envs';

@Module({
  controllers: [NotificationsController],
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.TCP,
        options: {
          host: envs.notificationsMicroserviceHost,
          port: envs.notificationsMicroservicePort,
        },
      },
    ]),
  ],
})
export class NotificationsMsModule {}
