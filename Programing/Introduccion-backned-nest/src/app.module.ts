import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoryController } from './controllers/category/category.controller';
import { ProductsService } from './services/products/products.service';
import { CategoryService } from './services/category/category.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoryController],
  providers: [AppService, ProductsService, CategoryService],
})
export class AppModule {}
