import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateDiagnosesDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  leadId: string;

  @IsEnum(['active', 'resolved'])
  status: 'active' | 'resolved';
}
