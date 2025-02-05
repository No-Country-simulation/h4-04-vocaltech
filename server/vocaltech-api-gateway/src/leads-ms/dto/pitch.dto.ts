import { IsString, IsOptional, IsNotEmpty, ValidateNested } from "class-validator"
import { MejorarPitchDto } from "./mejorar-pitch.dto";
import { Type } from "class-transformer";

export class PitchDto {
    @IsString()
    @IsNotEmpty()
    public pitch: string;
    @IsOptional()
    @IsString()
    public frecuencia_presenta: string;
    @IsOptional()
    @IsString()
    public preparado_presentar: string;
    @ValidateNested()
    @Type(() => MejorarPitchDto)
    mejorar_pitch: MejorarPitchDto;
    @IsOptional()
    @IsString()
    public principales_desafios: string;
}