/*
 * @Author: kingford
 * @Date: 2021-05-14 10:43:22
 * @LastEditTime: 2021-05-14 11:07:00
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSubscriber } from './user.subscriber';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SharedModule],
  controllers: [UserController],
  providers: [UserService, UserSubscriber],
})
export class UserModule {}
