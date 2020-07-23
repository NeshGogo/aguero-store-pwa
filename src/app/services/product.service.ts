import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Tasa',
      price: 1200,
      description: 'Una tasa especial para una persona especial.',
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Camisa',
      price: 1200,
      description: 'Una tasa especial para una persona especial.',
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Pantalon',
      price: 1200,
      description: 'Una tasa especial para una persona especial.',
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Broche',
      price: 1200,
      description: 'Una tasa especial para una persona especial.',
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Zapato',
      price: 1200,
      description: 'Una tasa especial para una persona especial.',
    },
  ];
  constructor() {}

  getAllProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    const product = this.products.find(( prod ) => prod.id === id);
    return product;
  }
}
