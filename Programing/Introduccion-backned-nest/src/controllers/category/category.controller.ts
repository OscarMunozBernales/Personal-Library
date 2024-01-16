import { Controller, Get, Param } from '@nestjs/common';

@Controller('category')
export class CategoryController {

  @Get(':id')
  category(@Param('id') id: string): string {
    return `category ${id}`;
  }
}
