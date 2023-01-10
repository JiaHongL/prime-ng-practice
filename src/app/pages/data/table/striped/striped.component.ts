import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-striped',
  templateUrl: './striped.component.html',
  styleUrls: ['./striped.component.scss']
})
export class StripedComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then(data => (this.products = data));
  }

}
