import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../../../core/services/product/product.service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const id = param.id;
      console.log(id);
      this.product = this.productService.getProduct(Number(id));
    });
  }

}
