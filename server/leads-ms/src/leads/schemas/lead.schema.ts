import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Respuestas } from "./respuesta.schema";

@Schema({
    timestamps: true
})
export class Lead {
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    id: string;
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    whatsapp: string;
    @Prop({type: Respuestas})
    respuestas: Respuestas
}

export const LeadSchema = SchemaFactory.createForClass(Lead);