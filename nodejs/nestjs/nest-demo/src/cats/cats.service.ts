/*
 * @Author: kingford
 * @Date: 2021-05-13 16:22:26
 * @LastEditTime: 2021-05-13 16:26:17
 */
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
