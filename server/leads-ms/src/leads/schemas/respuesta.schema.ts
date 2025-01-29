import { Schema, Prop } from "@nestjs/mongoose";

@Schema()
export class Respuestas {
    //Preguntas para Emprendedor
    @Prop()
    etapa_emprendimiento: string;
    @Prop()
    mvp_desarrollado: string;
    @Prop()
    opcion_representativa: string;
    @Prop()
    capacidad_comunicar: string;
    @Prop()
    espera_vocaltech: string;
    @Prop()
    obstaculos: string;
    
    //Para todos
    @Prop()
    pitch: boolean;
    
    //Preguntas para Empresas
    @Prop()
    empleados: string;
    @Prop()
    mayores_retos: string;
    @Prop()
    claridad_objetivos: number;
    @Prop()
    satisfaccion_empleados: number;
    @Prop()
    disposicion_cambio: number;
    @Prop()
    habilidades_blandas: string;
    @Prop()
    resultados_esperados: string;
}