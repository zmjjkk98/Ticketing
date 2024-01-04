import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Show } from 'src/show/entities/show.entity';

@Injectable()
export class TicketingService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    @InjectRepository(Show) private showRepository: Repository<Show>, 
    @InjectRepository(User) private userRepository: Repository<User>
  ){}

  async createTicket(user:User, show_id:number){
    
    if(user.point < 50000){
      throw BadRequestException
    }    
  

    const show = await this.showRepository.findOne({
      where: {id: show_id}
    })    

    if(show.seatCount <= 0){
      throw BadRequestException
    }

    await this.ticketRepository.save({
      user,
      pirce: 50000,
      show: show
    })
    
    
    show.seatCount -= 1
    user.point -= 50000

    // await this.showRepository.update(show.id, {seatCount: seatcount-1})
    await this.showRepository.save(show)
    await this.userRepository.save(user)

  }



  async getMyTicket(user:User){
    return await this.ticketRepository.find({
      where: {user: true},
      order: {
        id: "DESC"
      }
    })

  }

}
