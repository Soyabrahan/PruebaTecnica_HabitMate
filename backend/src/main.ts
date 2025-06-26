import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Importante: Asegurarse de que no hay ValidationPipe aquí para esta prueba
// import { ValidationPipe } from '@nestjs/common'; // Comentar o eliminar esta línea si no se usa

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilitar CORS para permitir solicitudes desde el frontend
  // Importante: Desactivar cualquier ValidationPipe global para esta prueba
  // app.useGlobalPipes(new ValidationPipe({ transform: true, forbidNonWhitelisted: true })); // <-- Comentar o eliminar esta línea
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
