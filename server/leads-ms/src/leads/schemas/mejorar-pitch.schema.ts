import { Schema, Prop } from "@nestjs/mongoose";

@Schema()
export class MejorarPitch {
    @Prop()
    claridad: number;
    @Prop()
    impacto_persuacion: number;
    @Prop()
    presentacion_visual: number;
    @Prop()
    seguridad_confianza: number;
}