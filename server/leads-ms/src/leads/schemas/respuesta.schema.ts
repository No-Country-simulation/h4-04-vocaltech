import { Schema, Prop } from "@nestjs/mongoose";
import { Comunicacion } from "./comunicacion.schema";
import { Pitch } from "./pitch.schema";
import { Mvp } from "./mvp.schema";
import { Talentos } from "./talentos.schema";

@Schema()
export class Respuestas {
    @Prop({ type: Comunicacion })
    comunicacion: Comunicacion;

    @Prop({ type: Pitch })
    pitch: Pitch

    @Prop({ type: Mvp })
    mvp: Mvp

    @Prop({ type: Talentos })
    talentos: Talentos
}