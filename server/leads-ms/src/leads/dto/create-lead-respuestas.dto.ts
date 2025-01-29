import { IsString, IsBoolean, IsOptional, IsNumber, ValidateNested, IsNotEmpty } from 'class-validator';

export class CreateLeadRespuestasDto{
    //Preguntas para Emprendedor
    @IsString()
    @IsOptional()
    public etapa_emprendimiento: string;
    @IsString()
    @IsOptional()
    public mvp_desarrollado: string;
    @IsString()
    @IsOptional()
    public opcion_representativa: string;
    @IsString()
    @IsOptional()
    public capacidad_comunicar: string;
    @IsString()
    @IsOptional()
    public espera_vocaltech: string;
    @IsString()
    @IsOptional()
    public obstaculos: string;

    //Para todos
    @IsBoolean()
    @IsOptional()
    public pitch: boolean;

    //Preguntas para Empresas
    @IsString()
    @IsOptional()
    public empleados: string;
    @IsString()
    @IsOptional()
    public mayores_retos: string;
    @IsNumber()
    @IsOptional()
    public claridad_objetivos: number;
    @IsNumber()
    @IsOptional()
    public satisfaccion_empleados: number;
    @IsNumber()
    @IsOptional()
    public disposicion_cambio: number;
    @IsString()
    @IsOptional()
    public habilidades_blandas: string;
    @IsString()
    @IsOptional()
    public resultados_esperados: string;
}