import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilitar CORS para permitir solicitudes desde el frontend
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
