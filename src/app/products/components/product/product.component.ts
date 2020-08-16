import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();
  toDate = new Date();

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void{}
  addCart(): void {
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}
