import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  providers: [MessageService]
})
export class SelectionComponent implements OnInit { 
  products!: Product[];

  selectedProduct1!: Product;

  selectedProduct2!: Product;

  selectedProduct3!: Product;

  selectedProducts1!: Product[];

  selectedProducts2!: Product[];

  selectedProducts3!: Product[];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }

  selectProduct(product: Product) {
      this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});
  }

  onRowSelect(event:any) {
      this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }

  onRowUnselect(event:any) {
      this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }
}
