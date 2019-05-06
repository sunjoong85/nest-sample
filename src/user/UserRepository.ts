import { EntityRepository, Repository } from "typeorm";
import _ from 'lodash';
import {User} from './entity/MyUser';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
