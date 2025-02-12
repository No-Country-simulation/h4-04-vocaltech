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
    console.log('📩 Received send_notification event:', data);

    const { email, message } = data;

    if (!email) {
      console.warn('⚠️ No email provided, skipping notification.');
      return { status: 'No email provided' };
    }

    try {
      console.log(`📨 Sending email to: ${email}`);
      await this.emailService.sendEmail(
        email,
        'Diagnóstico de VocalTech',
        message,
      );
      console.log(`✅ Email sent successfully to: ${email}`);

      return { status: 'Email notification sent' };
    } catch (error) {
      console.error('❌ Error sending email notification:', error);
      return { status: 'Error sending email', error };
    }
  }

  @MessagePattern('send_whatsapp_message')
  async sendWhatsAppMessage(data: SendNotificationDto) {
    const { phoneNumber, message } = data;

    console.log('📩 WhatsApp Notification received:');
    console.log('➡️ Phone Number:', phoneNumber);
    console.log('📋 Message:', message);

    // Verifica si el número de teléfono fue proporcionado
    if (phoneNumber) {
      await this.whatsappService.sendWhatsAppMessage(phoneNumber, message);
    }

    return { status: 'WhatsApp message sent' };
  }
}
