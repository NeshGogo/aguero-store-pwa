import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Observable, pipe } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  productsDistinct$: Observable<Product[]>;
  products$: Observable<Product[]>;
  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
    this.productsDistinct$ = this.cartService.cart$.pipe(
      map((products) =>  [...new Set(products)])
    );
  }

  ngOnInit(): void {}
}
