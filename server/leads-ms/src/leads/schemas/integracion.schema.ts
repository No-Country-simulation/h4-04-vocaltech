import { Schema, Prop } from "@nestjs/mongoose";

@Schema({_id: false})
export class Integracion {
    @Prop()
    comoComunicar: string;
    @Prop()
    seguroConectar: boolean;
    @Prop()
    interesEntrenamiento: boolean
}