import { Schema, Prop } from "@nestjs/mongoose";

@Schema({_id: false})
export class Comunicacion {
    @Prop()
    presentacionIdeas: number;
    @Prop()
    limitaPotencial: boolean;
    @Prop()
    desarrollarVoz: boolean;
    @Prop()
    areasMejora: string
}