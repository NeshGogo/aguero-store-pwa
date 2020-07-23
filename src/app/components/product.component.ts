import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';

import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnChanges, OnInit {
  @Input() product: ProductModel;
  @Output() productClicked: EventEmitter<number> = new EventEmitter();
  toDate = new Date();

  constructor() {
    console.log('1. Constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges');
    console.log('SimpleChanges', changes);
  }
  ngOnInit(): void {
    console.log('3. ngOnInit');
  }
  addCart(): void {
    console.log('Se agrego al carrito de compras.', this.product.id);
    this.productClicked.emit(this.product.id);
  }
}
