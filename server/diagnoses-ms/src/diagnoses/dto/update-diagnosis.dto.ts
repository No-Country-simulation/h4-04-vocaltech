import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosesDto } from './create-diagnosis.dto';

export class UpdateDiagnosisDto extends PartialType(CreateDiagnosesDto) {
  id: string;
}
