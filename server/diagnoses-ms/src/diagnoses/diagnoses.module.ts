import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiagnosesService } from './diagnoses.service';
import { DiagnosesController } from './diagnoses.controller';
import { Diagnoses, DiagnosesSchema } from './entities/diagnoses.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Diagnoses.name, schema: DiagnosesSchema },
    ]),
  ],
  controllers: [DiagnosesController],
  providers: [DiagnosesService],
  exports: [MongooseModule], //
})
export class DiagnosesModule {}
