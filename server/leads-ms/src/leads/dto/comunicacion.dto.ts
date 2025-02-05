import { IsString, IsOptional, IsNotEmpty } from "class-validator"

export class ComunicacionDto {

    //Emprendedor
    @IsString()
    @IsNotEmpty()
    public capacidad_comunicar: string;
    @IsString()
    @IsOptional()
    public importancia_comunicacion_ventas: string;
    @IsString()
    @IsOptional()
    public seguro_comunicar: string;
    @IsString()
    @IsOptional()
    public principal_desafio: string;
    @IsString()
    @IsOptional()
    public mayor_barrera: string;
    @IsString()
    @IsOptional()
    public impacto_comunicacion_liderazgo: string;
    @IsString()
    @IsOptional()
    public mayor_desafio: string;

    //Empresa
    @IsString()
    @IsOptional()
    public comunicacion_interna: string;
    @IsString()
    @IsOptional()
    public desafios: string;
    @IsString()
    @IsOptional()
    public mejorar_habilidades: string;
    @IsString()
    @IsOptional()
    public impacto: string;
}