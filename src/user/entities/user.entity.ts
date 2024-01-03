import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  @Column({type: 'varchar', unique:true, nullable:false})
  nickname: string;

  @Column({type: 'int', default: 1000000})
  point: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}