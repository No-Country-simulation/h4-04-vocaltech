import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsModule } from './notifications/notifications.module';
import { envs } from './config/envs';

@Module({
  imports: [
    MongooseModule.forRoot(envs.notificationsDbUrl),
    NotificationsModule,
  ],
})
export class AppModule {}
