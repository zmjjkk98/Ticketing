import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TicketingService } from './ticketing.service';
import { AuthGuard } from '@nestjs/passport';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('ticketing')
export class TicketingController {
  constructor(private readonly ticketService:TicketingService){}
  
  //티켓구매
  @UseGuards(AuthGuard('jwt'))
  @Post("/:show_id")
  createTicket(@UserInfo() user:User,
    @Param("show_id") show_id: string,
  ){
    return this.ticketService.createTicket(user, +show_id)
  }


  @UseGuards(AuthGuard('jwt'))
  @Get()
  getMyTicket(
    @UserInfo() user:User,  
  ){
    return this.ticketService.getMyTicket(user)

  }



}
