import { Schema, Prop } from "@nestjs/mongoose";

@Schema({_id: false})
export class Talentos {
    @Prop()
    incoporar_talento: string

    //Emprendedor
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

    //Empresa
    desafio: string;
    perfil_roles: string;
    acompanamiento: string;
    impacto: string;
}