import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUser } from './dto/create-user';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUser: CreateUser) {
    return this.userService.createUser(createUser);
  }

  @Get()
  categories() {
    return this.userService.getUsers();
  }

  @Delete(':id')
  deleteBuId(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }
}
