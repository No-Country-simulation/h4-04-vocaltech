import { IsString, IsOptional, IsNotEmpty } from "class-validator"

export class MvpDto {
    @IsString()
    @IsNotEmpty()
    public desarrollar_mvp: string
    @IsOptional()
    @IsString()
    public etapa: string
    
    //Emprendedor
    @IsOptional()
    @IsString()
    public validado: string
    @IsOptional()
    @IsString()
    public problema_mvp: string
    
    //Empresa
    @IsOptional()
    @IsString()
    public validar_ideas: string;
    @IsOptional()
    @IsString()
    public asesoramiento: string;

    @IsOptional()
    @IsString()
    public mayor_dificultad: string
}