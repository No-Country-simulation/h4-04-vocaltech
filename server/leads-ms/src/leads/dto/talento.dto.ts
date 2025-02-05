import { IsString, IsOptional, IsNotEmpty } from "class-validator"

export class TalentosDto {
    @IsString()
    @IsNotEmpty()
    public incoporar_talento: string

    //Emprendedor
    @IsString()
    @IsOptional()
    public cualidades: string
    @IsString()
    @IsOptional()
    public candidatos_evaluados: string
    @IsString()
    @IsOptional()
    public vertical: string
    @IsString()
    @IsOptional()
    public rol: string
    @IsString()
    @IsOptional()@IsString()
    @IsOptional()
    public desafios: string

    //Empresa
    @IsString()
    @IsOptional()
    public desafio: string;
    @IsString()
    @IsOptional()
    public perfil_roles: string;
    @IsString()
    @IsOptional()
    public acompanamiento: string;
    @IsString()
    @IsOptional()
    public impacto: string;
}