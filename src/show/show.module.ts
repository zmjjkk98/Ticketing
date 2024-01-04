import { Module } from '@nestjs/common';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from './entities/show.entity';
import { ShowDate } from './entities/show-date.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Show, ShowDate])],
  controllers: [ShowController],
  providers: [ShowService]
})
export class ShowModule {}
