import { Module } from '@nestjs/common';
import { UserMsModule } from './users-ms/users-ms.module';
import { LeadsMsModule } from './leads-ms/leads-ms.module';
import { DiagnosesMsModule } from './diagnoses-ms/diagnoses-ms.module';
import { NotificationsMsModule } from './notifications-ms/notifications-ms.module';

@Module({
  imports: [
    UserMsModule,
    LeadsMsModule,
    DiagnosesMsModule,
    NotificationsMsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
