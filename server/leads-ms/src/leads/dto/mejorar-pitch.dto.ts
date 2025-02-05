import { IsNumber, IsOptional, IsNotEmpty } from "class-validator"

export class MejorarPitchDto {
    @IsNumber()
    @IsOptional()
    public claridad: number;
    @IsNumber()
    @IsOptional()
    public impacto_persuacion: number;
    @IsNumber()
    @IsOptional()
    public presentacion_visual: number;
    @IsNumber()
    @IsOptional()
    public seguridad_confianza: number;
}