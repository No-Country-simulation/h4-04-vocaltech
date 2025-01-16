import { Schema, Prop } from "@nestjs/mongoose";
import { Comunicacion } from "./comunicacion.schema";
import { Mvp } from "./mvp.schema";
import { Integracion } from "./integracion.schema";

@Schema()
export class Respuestas {
    @Prop({type: Comunicacion})
    comunicacion: Comunicacion;
    @Prop({type: Mvp})
    mvp: Mvp;
    @Prop({type: Integracion})
    integracion: Integracion
}