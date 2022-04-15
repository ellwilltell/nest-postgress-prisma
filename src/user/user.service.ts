import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser } from './dto/create-user';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUser: CreateUser): Promise<User> {
    return this.prismaService.user.create({
      data: { emailAddress: createUser.email },
    });
  }

  async getUsers(): Promise<User[]> {
    return this.prismaService.user.findMany({});
  }

  async deleteById(id: string): Promise<User> {
    return this.prismaService.user.delete({ where: { id: Number(id) } });
  }
}
