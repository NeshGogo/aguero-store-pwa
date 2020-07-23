import { Component } from '@angular/core';
import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: ProductModel[] = [
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
  valuePow = 0;
  title = 'store';
  count = 1;
  names = ['Rafael', 'Maria', 'Elorent', 'Carlos'];
  addItem(): void {
    this.names.push(`item ${this.count}`);
    this.count++;
  }

  deleteItem(index: number): void {
    this.names.splice(index, 1);
  }

  productClicked(id: any): void {
    console.log(`Se dio click al producto con el ${id}`);
  }
}
