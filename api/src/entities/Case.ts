import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from './User';

@Table
export class Case extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.TINYINT)
  declare id: number;

  @Column(DataType.STRING(50))
  name: string;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;

}
