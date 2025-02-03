import { Schema, Prop } from "@nestjs/mongoose";

@Schema()
export class Mvp {
    @Prop()
    desarrollar_mvp: string
    @Prop()
	etapa: string

    //Emprendedor
    @Prop()
	validado: string
    @Prop()
	problema_mvp: string

    //Empresa
    @Prop()
    validar_ideas: string;
    @Prop()
    asesoramiento: string;

    @Prop()
	mayor_dificultad: string
}