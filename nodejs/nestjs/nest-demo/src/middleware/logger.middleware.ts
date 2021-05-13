/*
 * @Author: kingford
 * @Date: 2021-05-13 17:01:05
 * @LastEditTime: 2021-05-13 17:05:53
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('logger middleware Request...');
    next();
  }
}
