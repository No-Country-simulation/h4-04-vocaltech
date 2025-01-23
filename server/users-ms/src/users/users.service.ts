import {
  HttpStatus,
  Injectable,
  Logger,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient, UserRole, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  private logger = new Logger('User service');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('onModuleInit');
  }
  async createAdmin(
    email: string,
    password: string,
    name: string,
    organizationId: string,
  ): Promise<User> {
    this.logger.log(`create_admin: Creating admin with email: ${email}`);

    // Validar si ya existe un usuario con el correo
    const existingUser = await this.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      this.logger.error(
        `create_admin: User with email ${email} already exists.`,
      );
      throw new RpcException({
        message: 'Ya existe un usuario con este correo.',
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario con el rol ADMIN
    const admin = await this.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: UserRole.ADMIN, // Rol ADMIN desde Prisma
        organizationId,
      },
    });

    this.logger.log(
      `create_admin: Admin created successfully with ID: ${admin.id}`,
    );
    return admin;
  }

  async findOneByEmail(email: string) {
    this.logger.log(`find_one_user_by_email`);
    const user = await this.user.findUnique({
      where: { email },
    });
    return user;
  }

  async findOneUser(id: string) {
    this.logger.log(`find_one_user`);
    const user = await this.user.findUnique({
      where: { id },
    });
    return user;
  }

  async findAllUsers() {
    this.logger.log(`find_all_users`);
    const users = await this.user.findMany();
    return users;
  }

  async createUser(userData: CreateUserDto) {
    this.logger.log(`create_user`);
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const user = await this.user.create({
      data: userData,
    });
    return user;
  }

  async updateUser(id: string, updateData: UpdateUserDto): Promise<User> {
    this.logger.log('update_user');
    const { id: _, ...Data } = updateData;
    const updateUser = await this.user.update({ where: { id }, data: Data });
    return updateUser;
  }

  async deleteUser(id: string): Promise<User> {
    this.logger.log(`delete_user`);
    const user = await this.user.delete({ where: { id } });
    return user;
  }
}
