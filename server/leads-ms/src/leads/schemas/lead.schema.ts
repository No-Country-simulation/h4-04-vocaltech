import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Respuestas } from "./respuesta.schema";

@Schema({
    timestamps: true
})
export class Lead {
    @Prop({
        required: true
    })
    nombre: string;

    //Solo para Emprendedor
    @Prop()
    tiempo: string;
    @Prop()
    etapa: string;

    @Prop({
        required: true
    })
    email: string;

    @Prop({
        required: true
    })
    celular: string;

    //Solo para Empresa
    @Prop()
    ubicacion: string;

    @Prop()
    redes: string;

    @Prop()
    sector_actividad: string;
    
    @Prop({type: Respuestas})
    respuestas: Respuestas
}

export const LeadSchema = SchemaFactory.createForClass(Lead);