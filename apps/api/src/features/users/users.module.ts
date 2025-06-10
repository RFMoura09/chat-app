import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserActionsService } from './services/user-actions.service';

@Module({
  providers: [
    UserActionsService,
    UserService,
  ],
  exports: [
    UserService
  ]
})
export class UsersModule {}
