import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.TINYINT)
  declare id: number;

  @Column(DataType.STRING(50))
  name: string;

}
