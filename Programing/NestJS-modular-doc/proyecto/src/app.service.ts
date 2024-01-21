import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config/config';
import * as Joi from 'joi';

@Injectable()
export class AppService {

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey
    const apiSecret = this.configService.apiSecret
    console.log("🚀 ~ AppService ~ getHello ~ apiSecret:", apiSecret);
    console.log("🚀 ~ AppService ~ getHello ~ apiKey:", apiKey);

    const joi = Joi.object({  });
    console.log("🚀 ~ AppService ~ getHello ~ joi:", joi);
    return 'Hello World!';
  }
}
