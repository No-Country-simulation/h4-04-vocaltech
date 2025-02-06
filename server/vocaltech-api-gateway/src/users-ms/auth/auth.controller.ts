import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/users-ms/dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  httpService: any;

  constructor(
    @Inject('USER_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, description: 'Login succesfully' })
  @Post('login')
  login(@Body() { email, password }: LoginUserDto) {
    console.log('Logging in user with email:', email);
    return this.authClient.send('login', { email, password });
  }

  @ApiOperation({ summary: 'Validate a token' })
  @ApiResponse({ status: 200, description: 'Token validated' })
  @Get('validate_token/:token')
  validateToken(@Param('token') token: string) {
    console.log('Gateway: Validando token ahora');
    return this.authClient.send('validate_token', token);
  }
}
