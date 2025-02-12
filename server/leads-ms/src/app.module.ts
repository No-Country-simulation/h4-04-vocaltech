import { Module } from '@nestjs/common';
import { LeadsModule } from './leads/leads.module';
import { MongooseModule } from "@nestjs/mongoose";
import { envs } from './config/envs';

@Module({
  imports: [MongooseModule.forRoot(envs.dbUrl), LeadsModule]
})
export class AppModule {}
