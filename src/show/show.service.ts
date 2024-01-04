import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Show } from './entities/show.entity';
import { DataSource, Like, Repository } from 'typeorm';
import _, { some } from 'lodash';
import { CreateShowDto } from './dto/create-show.dto';
import { ShowDate } from './entities/show-date.entity';
import { CreateShowDateDto } from './dto/create-showDate.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show) private showRepository: Repository<Show>, 
    @InjectRepository(ShowDate) private showDateRepository: Repository<ShowDate>,
    ){}

  async createShow(createShowDto: CreateShowDto, createShowDateDto: CreateShowDateDto){
    const {showTime, openAt, closeAt} = createShowDateDto;



    const newShow = await this.showRepository.save(createShowDto);

    await this.showDateRepository.save({
      showTime,
      openAt,
      closeAt,
      show:newShow,
    })  
  }


  async getShowList(){
    const shows = await this.showRepository.find({
      order: {
        createdAt: "DESC",
      }
    })
    
    return shows
  }

  async searchShow(keyword: string){
    const shows = await this.showRepository.findBy({
      title: Like(`%${keyword}%`),
    })

    return shows
  }
  
  async getOneShow(id: number){
    if(_.isNaN(id)){
      throw new BadRequestException('공연 ID가 잘못 되었습니다.')
    }

    const show = await this.showRepository.findOne({
      where: {id, deletedAt: null},
    })

    return show

  }



}
