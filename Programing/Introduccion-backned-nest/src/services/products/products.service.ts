import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductsDTO, UpdateProductDTO } from 'src/dto/products.dto';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 122,
      stock: 12,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 122,
      stock: 12,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 122,
      stock: 12,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description 4',
      price: 122,
      stock: 12,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description 5',
      price: 122,
      stock: 12,
      image: 'https://picsum.photos/200/300'
    },
  ];

  findAll(): IProduct[] {

    if (this.products.length === 0) {
      throw new NotFoundException('Products not found');
    }
    return this.products;
  }

  findOne(id: string): IProduct {
    const product: IProduct = this.products.find(item => `${item.id}` === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return  product;
  }

  create(payload: CreateProductsDTO): IProduct {
    console.log("🚀 ~ ProductsService ~ create ~ payload:", payload);
    const newProduct = {
      id: this.products.length + 1,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(payload: UpdateProductDTO): IProduct {
    const index = this.products.findIndex(item => `${item.id}` === `${payload.id}`);

    if ( index === -1 ) {
      throw new NotFoundException(`Product #${payload.id} not found`);
    }

    this.products[index] =  { ...this.products[index], ...payload }
    return this.products[index];
  }

  delete(id: string): IProduct {
    const index = this.products.findIndex(item => `${item.id}` === id);

    if ( index === -1 ) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    const product = this.products[index];
    this.products.splice(index, 1);
    return product;
  }
}
