import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NotificationsDocument = HydratedDocument<Notifications>;

@Schema({ timestamps: true }) // Agrega createdAt y updatedAt automáticamente
export class Notifications {
  @Prop({ required: true })
  type: 'EMAIL' | 'WHATSAPP';

  @Prop({ required: true })
  recipient: string; // Correo o número de WhatsApp

  @Prop({ required: true })
  message: string;

  @Prop({ default: 'PENDING' })
  status: 'PENDING' | 'SENT' | 'FAILED';
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
