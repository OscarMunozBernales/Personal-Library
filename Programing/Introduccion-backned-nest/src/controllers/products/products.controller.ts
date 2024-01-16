import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateProductsDTO } from 'src/dto/products.dto';
import { IProduct } from 'src/interfaces/product.interface';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productService: ProductsService
   ){}

  @Get('')
  getProducts(): {} {
    const products: IProduct[] = this.productService.findAll();
    return {
      status: 200,
      message: 'Products list',
      payload: products
    };
  }


  @Get(':id')
  product(@Res() res: Response, @Req() req: Request): void {
    const { id } = req.params;
    const product: IProduct = this.productService.findOne(id);

    res.status(HttpStatus.ACCEPTED).send({
      status: 200,
      message: 'Product detail',
      payload: product
    });

  }

  @Post('')
  create(@Body() body: CreateProductsDTO): {} {
    console.log("🚀 ~ ProductsController ~ create ~ body:", body);
    const product = this.productService.create(body);
    return {
      status: 200,
      message: 'Product created',
      payload: product
    };

  }

  //Edita complemtamente el recurso
  @Put()
  update(@Res() res: Response, @Req() req: Request): void {
    const payload: IProduct = req.body;
    const response = this.productService.update(payload);
    res.status(HttpStatus.ACCEPTED).send({
      message: 'update product',
      status: 200,
      payload: response
    });
  }

  //Editar  parcialmente el recurso
  @Patch(':id')
  partialUpdate(@Res() res: Response, @Req() req: Request): void {

    const response = this.productService.update(req.body);
    res.status(HttpStatus.ACCEPTED).send({
      message: 'update product',
      status: 200,
      payload: response
    });
  }

  @Delete()
  delete( @Res() res: Response, @Req() req: Request ): void {

    const { id } = req.body;
    const response = this.productService.delete(id);
    res.status(HttpStatus.ACCEPTED).send({
      message: 'delete product',
      status: 200,
      payload: response
    });
  }
}
