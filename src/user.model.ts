import { Model } from 'sequelize-typescript';
import { Column, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  otp: string;

  @Column
  isVerified: boolean;
}
