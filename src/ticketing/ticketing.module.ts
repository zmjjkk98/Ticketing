import { Module } from '@nestjs/common';
import { TicketingController } from './ticketing.controller';
import { TicketingService } from './ticketing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Show } from 'src/show/entities/show.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Show, User])],
  controllers: [TicketingController],
  providers: [TicketingService]
})
export class TicketingModule {}
