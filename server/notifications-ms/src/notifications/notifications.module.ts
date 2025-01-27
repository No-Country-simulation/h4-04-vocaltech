/*
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import {
  Notifications,
  NotificationsSchema,
} from './entities/notification.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notifications.name, schema: NotificationsSchema },
    ]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [MongooseModule],
})
export class NotificationsModule {}
*/
