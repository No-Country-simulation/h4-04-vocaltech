import { Prop, Schema } from "@nestjs/mongoose";
import { MejorarPitch } from "./mejorar-pitch.schema";

@Schema()
export class Pitch {
    //Emprendedor
    @Prop()
    pitch: string;
    @Prop()
    frecuencia_presenta: string;
    @Prop()
    preparado_presentar: string;
    @Prop({ type: MejorarPitch })
    mejorar_pitch: MejorarPitch
    @Prop()
    principales_desafios: string;
}