import { Schema, Prop } from "@nestjs/mongoose";

@Schema()
export class Talentos {
    @Prop()
    incoporar_talento: string
    @Prop()
	cualidades: string
    @Prop()
	candidatos_evaluados: string
    @Prop()
	vertical: string
    @Prop()
	rol: string
    @Prop()
	desafios: string
}