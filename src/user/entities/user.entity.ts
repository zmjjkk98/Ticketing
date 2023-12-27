import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index('email', ['email'], {unique: true})
@Entity({
  name:'users',
})
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', unique: true, nullable: false})
  email: string;

  @Column({type: 'varchar', select:false, nullable: false})
  password: string;


}