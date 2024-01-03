import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
import { CreateShowDateDto } from './dto/create-showDate.dto';

@Controller('show')
export class ShowController {
  constructor(private readonly showService:ShowService){}
  
  @Post()
  async createShow(@Body() createShowDto: CreateShowDto,
  @Body() createShowDateDto:CreateShowDateDto){
    const show_id = await this.showService.createShow(createShowDto, createShowDateDto);
  }

  @Get()
  getShowList(){
    return this.showService.getShowList();
  }

  @Get('/keyword')
  searchShow(@Query('keyword') keyword: string ){
    return this.showService.searchShow(keyword);
  }


  @Get('/:id')
  getOneShow(@Param('id') id: string){
    return this.showService.getOneShow(+id);
  }




}

