/*
 * @Author: kingford
 * @Date: 2021-05-13 09:51:36
 * @LastEditTime: 2021-05-13 11:43:51
 */
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(): string {
    return 'This action adds a new post api';
  }
}
