import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosesDto } from './create-diagnoses.dto';

export class UpdateDiagnosisDto extends PartialType(CreateDiagnosesDto) {
  id: string;
}
