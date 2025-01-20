import { Module } from '@nestjs/common';
import { LeadsController } from './leads/leads.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config/envs';

@Module({
  controllers: [LeadsController],
  imports:[
    ClientsModule.register([
      { 
        name: 'LEAD_SERVICE', 
        transport: Transport.TCP,
        options: {
          host: envs.leadsMicroserviceHost,
          port: envs.leadsMicroservicePort,
        },
      },
    ]),
  ]
})
export class LeadsMsModule {}
