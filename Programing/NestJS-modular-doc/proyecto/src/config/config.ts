import { registerAs } from '@nestjs/config'

export default registerAs('config', () => ({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  DATABASE: process.env.DATABASE || 'localhost'
}))