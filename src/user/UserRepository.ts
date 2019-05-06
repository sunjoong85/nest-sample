import { EntityRepository, Repository } from "typeorm";
import _ from 'lodash';
import {MyUser} from './entity/MyUser';

@EntityRepository(MyUser)
export class UserRepository extends Repository<MyUser> {}
