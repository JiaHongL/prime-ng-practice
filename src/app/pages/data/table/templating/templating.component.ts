import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.scss']
})
export class TemplatingComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }

}
