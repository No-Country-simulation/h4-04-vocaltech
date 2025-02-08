import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SendNotificationDto {
  @IsNotEmpty()
  @IsString()
  leadId: string; // ID del lead al que se le enviará la notificación

  @IsOptional()
  @IsEmail()
  email?: string; // Correo electrónico (opcional si solo es WhatsApp)

  @IsOptional()
  @IsString()
  phoneNumber?: string; // Número de WhatsApp en formato internacional (+549...)

  @IsNotEmpty()
  @IsString()
  message: string; // Mensaje que se enviará (diagnóstico generado)
}
