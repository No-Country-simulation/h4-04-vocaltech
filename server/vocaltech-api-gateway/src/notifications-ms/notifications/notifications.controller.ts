import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { SendNotificationDto } from '../dto/create-notification.dto';
import { firstValueFrom } from 'rxjs';
import { UpdateNotificationDto } from '../dto/update-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly notificationClient: ClientProxy,
  ) {}
  @Post('sendNotification')
  async sendNotification(@Body() data: SendNotificationDto) {
    const { email, phoneNumber, message } = data;
    try {
      const result = await firstValueFrom(
        this.notificationClient.send('send_notification', {
          email,
          phoneNumber,
          message,
        }),
      );
      return result;
    } catch (error) {
      throw new RpcException(error);
    }
  }
  @Post('sendWhatsAppMessage')
  async sendWhatsAppMessage(@Body() data: SendNotificationDto) {
    const { phoneNumber, message } = data;
    try {
      const result = await firstValueFrom(
        this.notificationClient.send('send_whatsapp_message', {
          phoneNumber,
          message,
        }),
      );
      return result;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
