import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config'
import config from './config/config';
import validation from './config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: validation
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
