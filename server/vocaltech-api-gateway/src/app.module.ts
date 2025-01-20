import { Module } from '@nestjs/common';
import { UserMsModule } from './users-ms/users-ms.module';
import { LeadsMsModule } from './leads-ms/leads-ms.module';

@Module({
  imports: [UserMsModule, LeadsMsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
