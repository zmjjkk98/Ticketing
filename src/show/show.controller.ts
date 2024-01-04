import { Body, Controller, ForbiddenException, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
import { CreateShowDateDto } from './dto/create-showDate.dto';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('show')
export class ShowController {
  constructor(private readonly showService:ShowService){}
  
  @UseGuards(AuthGuard('jwt'))
  @Post()
  createShow(@Body() createShowDto: CreateShowDto,
  @Body() createShowDateDto:CreateShowDateDto,
  @UserInfo() user:User){

    if(!user.is_admin){
      throw new ForbiddenException("공연을 등록할 권한이 없습니다.")
    }

    this.showService.createShow(createShowDto, createShowDateDto);
    return "공연 등록이 완료 되었습니다."
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

