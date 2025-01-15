import { Module } from '@nestjs/common';
import { LeadsModule } from './leads/leads.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot('mongodb/locahost/nest'), LeadsModule]
})
export class AppModule {}
