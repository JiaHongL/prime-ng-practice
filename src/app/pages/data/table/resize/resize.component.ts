import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer.service';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss']
})
export class ResizeComponent implements OnInit {

  products!: Product[];

  customers!: Customer[];

  constructor(private productService: ProductService, private customerService: CustomerService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
      this.customerService.getCustomersLarge().then(customers => this.customers = customers);
  }
  
}
