import { Module } from '@nestjs/common';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from './entities/show.entity';
import { ShowDate } from './entities/show-date.entity';
import { Seat } from './entities/seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Show, ShowDate, Seat])],
  controllers: [ShowController],
  providers: [ShowService]
})
export class ShowModule {}
