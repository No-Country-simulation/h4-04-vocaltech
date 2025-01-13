import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}
