import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./showCategoryTypes";
import { ShowDate } from "./show-date.entity";
import { Seat } from "./seat.entity";

@Entity({
  name: 'show',
})
export class Show {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", length: 50, nullable: false})
  title: string;

  @Column({type: 'varchar', length: 1000, nullable: false})
  content: string;

  @Column({type: "varchar", nullable: false})
  place: string

  @Column({type: "varchar", nullable:false})
  img: string;

  @Column({type: 'enum', enum:Category, nullable:false})
  category: Category;

  @Column({type: 'int', default: 3000})
  seatCount: number;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(()=> ShowDate, (showDate) => showDate.show)
  showDate: ShowDate[]

  @OneToMany(()=> Seat, (seat)=> seat.show)
  seat:Seat[]
  
}