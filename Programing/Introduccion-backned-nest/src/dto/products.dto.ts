import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductsDTO {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsString()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDTO extends PartialType(CreateProductsDTO) {

  @IsNumber()
  @IsNotEmpty()
  readonly id:number
}
