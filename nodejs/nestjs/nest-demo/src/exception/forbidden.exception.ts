/*
 * @Author: kingford
 * @Date: 2021-05-13 17:25:48
 * @LastEditTime: 2021-05-13 17:32:11
 */
import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.I_AM_A_TEAPOT);
  }
}
