import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Show } from "./show.entity";

@Entity({
  name: 'showDate',
})
export class ShowDate {  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable:false})
  showTime: string[]

  @Column({type: 'varchar' , nullable: false})
  openAt:string;

  @Column({type: 'varchar', nullable: false})
  closeAt:string;

  @ManyToOne(() => Show, (show) => show.showDate, {cascade: true})
  @JoinColumn({name:"show_id", referencedColumnName:"id"})
  show: Show

}