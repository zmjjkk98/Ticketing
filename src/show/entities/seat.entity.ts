import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Show } from "./show.entity";

@Entity({
  name: 'seat',
})
export class Seat{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=> Show, (show)=> show.seat, {cascade: true})
  @JoinColumn({name: "show_id"})
  show: Show

}