
import { Show } from "src/show/entities/show.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'ticket',
})
export class Ticket{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pirce: number;

  @ManyToOne(()=>Show, (show) => show.ticket)
  show:Show

  @ManyToOne(()=> User, (user)=> user.ticket)
  user: User

}