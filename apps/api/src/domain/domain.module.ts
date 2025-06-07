import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';

@Module({
    exports: [
        User
    ]
})
export class DomainModule {}
