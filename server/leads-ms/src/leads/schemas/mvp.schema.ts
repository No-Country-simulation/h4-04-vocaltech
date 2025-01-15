import { Schema, Prop } from "@nestjs/mongoose";

@Schema({_id: false})
export class Mvp {
    @Prop()
    tieneIdea: boolean;
    @Prop()
    sabeValidar: boolean;
    @Prop()
    necesitaEquipo: boolean;
    @Prop()
    conocimientosFaltantes: string
}