import { Ticket } from "src/ticketing/entities/ticket.entity";
import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  @Column({type: 'boolean', default: false})
  is_admin: boolean

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


  @OneToMany(()=> Ticket, (ticket)=> ticket.user)
  ticket:Ticket[]

}