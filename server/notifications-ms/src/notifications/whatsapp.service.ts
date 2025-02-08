import { Injectable } from '@nestjs/common';
import { envs } from 'src/config/envs';
import * as Twilio from 'twilio';

@Injectable()
export class WhatsAppService {
  private client: Twilio.Twilio;

  constructor() {
    this.client = Twilio(envs.twilioAccountSid, envs.twilioAuthToken);
  }

  async sendWhatsAppMessage(to: string, message: string): Promise<void> {
    try {
      await this.client.messages.create({
        body: message,
        from: `whatsapp:${envs.twilioPhoneNumber}`,
        to: `whatsapp:${to}`,
      });
      console.log(`WhatsApp message sent to ${to}`);
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    }
  }
}
