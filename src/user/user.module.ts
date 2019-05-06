import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';
import { UserRepository } from './UserRepository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserRepository
        ]),
    ],
    providers: [UserService]
})
export class UserModule { }