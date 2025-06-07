import { Module } from '@nestjs/common';
import { DomainModule } from '@domain/domain.module';
import { UsersModule } from '@features/users/users.module';

@Module({
  imports: [
    UsersModule,
    DomainModule
  ],
})
export class AppModule {}
