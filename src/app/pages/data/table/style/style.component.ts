import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss'],
})
export class StyleComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }

}
