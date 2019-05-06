import { Injectable } from "@nestjs/common";
import {UserRepository} from './UserRepository';

@Injectable()
export class UserService {
    constructor(private readonly userRepo:UserRepository){}
}