import { Schema, Prop } from "@nestjs/mongoose";

@Schema()
export class Comunicacion {
    //Emprendedor
    @Prop()
    capacidad_comunicar: string;
    @Prop()
    importancia_comunicacion_ventas: string;
    @Prop()
    seguro_comunicar: string;
    @Prop()
    principal_desafio: string;
    @Prop()
    mayor_barrera: string;
    @Prop()
    impacto_comunicacion_liderazgo: string;
    @Prop()
    mayor_desafio: string;

    //Empresa
}