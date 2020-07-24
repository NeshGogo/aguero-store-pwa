import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

  productClicked(id: any): void {
    console.log(`Se dio click al producto con el ${id}`);
  }
}
