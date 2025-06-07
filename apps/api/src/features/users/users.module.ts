import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserActionsService } from './services/user-actions.service';
import { DomainModule } from '@domain/domain.module';

@Module({
  imports: [
    DomainModule
  ],
  providers: [
    UserActionsService,
    UserService,
  ],
  exports: [
    UserService
  ]
})
export class UsersModule {}
