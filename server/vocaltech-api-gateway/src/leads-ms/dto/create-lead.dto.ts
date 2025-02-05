import { Type } from 'class-transformer';
import { IsString, IsBoolean, IsOptional, IsNumber, ValidateNested, IsNotEmpty, IsEmail } from 'class-validator';
import { CreateLeadRespuestasDto } from './create-lead-respuestas.dto';

export class CreateLeadDto {
    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    public etapa: string;

    @IsString()
    public tiempo: string;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public whatsapp: string;

    @IsString()
    @IsOptional()
    public ubicacion: string;

    @IsString()
    @IsOptional()
    public empleados: string;

    @IsString()
    public redes: string;
    
    @IsString()
    public sector_actividad: string;

    @IsString()
    @IsNotEmpty()
    public categoria: string;

    @ValidateNested()
    @Type(() => CreateLeadRespuestasDto)
    respuestas: CreateLeadRespuestasDto;
}