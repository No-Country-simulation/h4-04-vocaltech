import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SendNotificationDto } from './dto/create-notification.dto';
import { WhatsAppService } from './whatsapp.service';
import { EmailService } from './email.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly whatsappService: WhatsAppService,
    private readonly emailService: EmailService,
  ) {}

  @MessagePattern('send_notification')
  async sendNotification(data: SendNotificationDto) {
    const { email, phoneNumber, message } = data;

    if (phoneNumber) {
      await this.whatsappService.sendWhatsAppMessage(phoneNumber, message);
    }

    if (email) {
      await this.emailService.sendEmail(
        email,
        'Diagnóstico de VocalTech',
        message,
      );
    }

    return { status: 'Notification sent' };
  }
}
