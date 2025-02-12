import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiagnosesDocument = Diagnoses & Document;

@Schema({ timestamps: true })
export class Diagnoses {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: String, required: true })
  leadId: string;

  @Prop({ enum: ['active', 'resolved'], default: 'active' })
  status: string;
}

export const DiagnosesSchema = SchemaFactory.createForClass(Diagnoses);
