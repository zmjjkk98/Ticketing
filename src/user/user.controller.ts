import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() loginDto: LoginDto){
    return await this.userService.register(loginDto.email, loginDto.password);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto){
    return await this.userService.login(loginDto.email, loginDto.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('email')
  getEmail(@UserInfo() user:User){
    return {email: user.email};
  }

}
