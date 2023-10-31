import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateNotificationDto } from 'src/notification/dto/update-notification.dto';
import { NotificationDto } from 'src/notification/dto/create-notification.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async updateProfile(@Body() update_dto: any, @Param('id') user_id: number) {
    return await this.usersService.updateProfile(user_id, update_dto);
  }

  @Put('push/enable')
  @HttpCode(HttpStatus.OK)
  async enablePush(
    @Body() update_dto: NotificationDto,
    @Param('id') user_id: number,
  ) {
    return await this.usersService.enablePush(user_id, update_dto);
  }

  @Put('push/disable')
  @HttpCode(HttpStatus.OK)
  async disablePush(
    @Param('id') user_id: number,
    @Body() update_dto: UpdateNotificationDto,
  ) {
    return await this.usersService.disablePush(user_id, update_dto);
  }

  @Get('push/notifications')
  @HttpCode(HttpStatus.OK)
  async fetchPushNotification() {
    return await this.usersService.getPushNotifications();
  }
}
