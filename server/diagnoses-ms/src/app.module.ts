import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiagnosesModule } from './diagnoses/diagnoses.module';
import { envs } from './config/envs';

@Module({
  imports: [MongooseModule.forRoot(envs.dbUrl), DiagnosesModule],
})
export class AppModule {}
