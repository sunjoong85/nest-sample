import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
const path = require('path')

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "flyers-mysql.cwvg3yawhrex.ap-northeast-2.rds.amazonaws.com",
      "port": 3306,
      "username": "flyers",
      "password": "flyers1234",
      "database": "flyers",
      "entities": [
        path.join(__dirname, './**/entity/**/*{.ts,.js}'),
      ],
      "synchronize": true,
      logging: ['error'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
