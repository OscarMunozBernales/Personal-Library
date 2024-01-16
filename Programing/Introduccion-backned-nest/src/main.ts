import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar el ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transformar automáticamente las solicitudes en instancias de DTO
      whitelist: true, // Eliminar propiedades desconocidas del DTO
      forbidNonWhitelisted: false, // Lanzar un error si hay propiedades no permitidas en el DTO
    }),
  );


  await app.listen(3000);
}
bootstrap();
