import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss']
})
export class ReorderComponent implements OnInit  {

  products!: Product[];

  cols!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {

      this.productService.getProductsSmall().then(data => this.products = data);

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];
      
  }

}