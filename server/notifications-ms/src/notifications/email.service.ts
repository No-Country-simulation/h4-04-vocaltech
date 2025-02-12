import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { envs } from 'src/config/envs';

@Injectable()
export class EmailService {
  constructor() {
    console.log('Initializing EmailService...');
    sgMail.setApiKey(envs.sendGridApiKey);
    console.log('SendGrid API Key set successfully.');
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    console.log(`Preparing to send email...`);
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Text: ${text}`);

    try {
      const response = await sgMail.send({
        to,
        from: envs.sendGridFromEmail,
        subject,
        text,
      });

      console.log(`Email sent successfully to ${to}`);
      console.log('SendGrid response:', response);
    } catch (error) {
      console.error(
        'Error sending email:',
        error.response ? error.response.body : error,
      );
    }
  }
}
