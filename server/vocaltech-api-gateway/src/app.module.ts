import { Module } from '@nestjs/common';
import { UserMsModule } from './users-ms/users-ms.module';

@Module({
  imports: [UserMsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
