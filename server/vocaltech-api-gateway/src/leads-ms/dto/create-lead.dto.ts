import { IsString, IsBoolean, IsOptional, IsNumber, ValidateNested, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateLeadDto {
    @IsString()
    public name: string;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public whatsapp: string;

    public respuestas: {
        comunicacion?: {
            presentacionIdeas: number;
            limitaPotencial: boolean;
            desarrollarVoz: boolean;
            areasMejora: string
        };
        mvp?: {
            tieneIdea: boolean;
            sabeValidar: boolean;
            necesitaEquipo: boolean;
            conocimientosFaltantes: string
        };
        integracion?: {
            comoComunicar: string;
            seguroConectar: boolean;
            interesEntrenamiento: boolean
        }
    }
}