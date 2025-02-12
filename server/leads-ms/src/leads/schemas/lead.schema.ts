import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Respuestas } from "./respuesta.schema";

@Schema({
    timestamps: true
})
export class Lead {
    @Prop({
        required: true
    })
    name: string;

    @Prop({
        required: true
    })
    email: string;

    @Prop({
        required: true
    })
    whatsapp: string;
    
    @Prop({type: Respuestas})
    respuestas: Respuestas
}

export const LeadSchema = SchemaFactory.createForClass(Lead);