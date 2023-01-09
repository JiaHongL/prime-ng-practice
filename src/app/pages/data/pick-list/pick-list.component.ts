import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {
  sourceProducts!: Product[];

  targetProducts!: Product[];

  constructor(private carService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.carService.getProductsSmall().then(products => this.sourceProducts = products);
    this.targetProducts = [];
    this.primengConfig.ripple = true;
  }

}
