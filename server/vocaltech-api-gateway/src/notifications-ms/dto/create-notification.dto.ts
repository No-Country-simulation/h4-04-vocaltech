import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsPhoneNumber,
} from 'class-validator';

export class SendNotificationDto {
  @IsNotEmpty()
  @IsString()
  leadId: string; // ID del lead al que se le enviará la notificación

  // Validación opcional de correo electrónico
  @IsOptional()
  @IsEmail()
  email?: string; // Correo electrónico (opcional si solo es WhatsApp)

  // Validación opcional de número de teléfono
  @IsOptional()
  @IsPhoneNumber(null, {
    message: 'Phone number must be a valid WhatsApp number',
  })
  phoneNumber?: string; // Número de WhatsApp en formato internacional (+549...)

  @IsNotEmpty()
  @IsString()
  message: string; // Mensaje que se enviará (diagnóstico generado)
}
