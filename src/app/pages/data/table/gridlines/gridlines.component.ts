import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-gridlines',
  templateUrl: './gridlines.component.html',
  styleUrls: ['./gridlines.component.scss']
})
export class GridlinesComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then(data => (this.products = data));
  }

}
