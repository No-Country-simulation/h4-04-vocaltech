import { Module } from '@nestjs/common';
import { DiagnosesModule } from './diagnoses/diagnoses.module';

@Module({
  imports: [DiagnosesModule],
})
export class AppModule {}
