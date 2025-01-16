import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('find_all_users')
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @MessagePattern('find_one_user_by_email')
  async findOneByEmail(@Payload('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @MessagePattern('find_one_user')
  async findOneUser(@Payload('id') id: string) {
    return this.userService.findOneUser(id);
  }

  @MessagePattern('create_user')
  async createUser(@Payload() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @MessagePattern('update_user')
  async updateUser(@Payload() updateData: UpdateUserDto): Promise<UserModel> {
    return this.userService.updateUser(updateData.id, updateData);
  }

  @MessagePattern('delete_user')
  async deleteUser(@Payload('id') id: string): Promise<UserModel> {
    if (!id) {
      throw new RpcException('id is required');
    }
    return this.userService.deleteUser(id);
  }
}
