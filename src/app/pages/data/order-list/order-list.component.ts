import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  selectedProducts: Product[] = [];

  products!: Product[];

  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(cars => this.products = cars);
    this.primengConfig.ripple = true;
  }

}
