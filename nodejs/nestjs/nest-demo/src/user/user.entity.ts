/*
 * @Author: kingford
 * @Date: 2021-05-14 10:54:03
 * @LastEditTime: 2021-05-14 10:54:13
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
