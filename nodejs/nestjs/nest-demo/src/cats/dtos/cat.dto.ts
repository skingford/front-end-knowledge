/*
 * @Author: kingford
 * @Date: 2021-05-13 16:15:15
 * @LastEditTime: 2021-05-13 16:17:35
 */

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto {}

export class ListAllEntities {
  readonly limit: number;
}
