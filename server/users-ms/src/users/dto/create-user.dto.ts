import { UserRole } from '@prisma/client';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  @IsString()
  public leadId: string;

  @IsOptional()
  @IsString()
  public organizationId: string;

  @IsEnum(UserRole)
  public role: UserRole;
}
