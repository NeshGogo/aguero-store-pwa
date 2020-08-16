import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../../../core/services/product/product.service';
import { MyValidators } from '../../../utils/my-validatos';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
  ) {
    this.buildForm();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productService.createProduct(product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['admin/products'])
      });
    }
    console.log(this.form.value);
  }
  // Asi es como construimos el formulario cuando tenemos multiples campos.
  private buildForm(): void{
    this.form = this.formBuilder.group({
      id: ['', [Validators.required] ],
      title: ['', [Validators.required] ],
      price: [0, [Validators.required, MyValidators.isPriceValided] ],
      description: ['', [Validators.required]]
    });
  }

  get priceField(): AbstractControl{
    return this.form.get('price');
  }

}
