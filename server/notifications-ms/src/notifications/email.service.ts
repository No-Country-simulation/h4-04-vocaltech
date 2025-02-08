import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { envs } from 'src/config/envs';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(envs.sendGridApiKey);
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      await sgMail.send({
        to,
        from: envs.sendGridFromEmail,
        subject,
        text,
      });
      console.log(`Email sent to ${to}`);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
