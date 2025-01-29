import { Type } from 'class-transformer';
import { IsString, IsBoolean, IsOptional, IsNumber, ValidateNested, IsNotEmpty, IsEmail } from 'class-validator';
import { CreateLeadRespuestasDto } from './create-lead-respuestas.dto';

export class CreateLeadDto {
    @IsString()
    @IsNotEmpty()
    public name: string;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public whatsapp: string;

    @IsString()
    public ubicacion: string;
    
    @IsString()
    public sector_actividad: string;

    @ValidateNested()
    @Type(() => CreateLeadRespuestasDto)
    respuestas: CreateLeadRespuestasDto;
}