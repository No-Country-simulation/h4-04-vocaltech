import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UserService } from '../users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME;
  const organizationId = process.env.ADMIN_ORGANIZATION_ID;

  try {
    console.log(`Creating admin with email: ${email}`);
    const admin = await userService.createAdmin(
      email,
      password,
      name,
      organizationId,
    );
    console.log('Admin created successfully:', admin);
  } catch (error) {
    console.error('Error creating admin:', error.message);
  } finally {
    await app.close();
  }
}

bootstrap();
