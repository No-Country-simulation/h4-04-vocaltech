import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { envs } from '../config/envs';

@Injectable()
export class WhatsAppService {
  private readonly apiUrl = 'https://graph.facebook.com/v14.0'; // URL base de la API de Meta

  constructor() {}

  async sendWhatsAppMessage(to: string, message: string): Promise<void> {
    const url = `${this.apiUrl}/${envs.phoneNumberId}/messages`;

    const data = {
      messaging_product: 'whatsapp',
      to: to,
      text: { body: message },
    };

    try {
      console.log('📨 Sending WhatsApp message...');
      console.log('➡️ Addressee:', to);
      console.log('📋 Message:', message);
      console.log('📲 From:', envs.phoneNumberId); // Este es el ID de tu número de WhatsApp

      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${envs.whatsappToken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('✅ Message sent:', response.data);
    } catch (error) {
      console.error(
        '❌ Error sending WhatsApp message:',
        error.response ? error.response.data : error.message,
      );
    }
  }
}
