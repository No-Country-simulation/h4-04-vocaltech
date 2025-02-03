import { Schema, Prop } from "@nestjs/mongoose";

@Schema()
export class Mvp {
    @Prop()
    desarrollar_mvp: string
    @Prop()
	etapa: string
    @Prop()
	validado: string
    @Prop()
	problema_mvp: string
    @Prop()
	mayor_dificultad: string
}