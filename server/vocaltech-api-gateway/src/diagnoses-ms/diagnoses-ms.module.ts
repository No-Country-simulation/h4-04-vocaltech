import { Module } from '@nestjs/common';
import { DiagnosesController } from './diagnoses/diagnoses.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config/envs';

@Module({
  controllers: [DiagnosesController],
  imports: [
    ClientsModule.register([
      {
        name: 'DIAGNOSES_SERVICE',
        transport: Transport.TCP,
        options: {
          host: envs.diagnosesMicroserviceHost,
          port: envs.diagnosesMicroservicePort,
        },
      },
    ]),
  ],
})
export class DiagnosesMsModule {}
