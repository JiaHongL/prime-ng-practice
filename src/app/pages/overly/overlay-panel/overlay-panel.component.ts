import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss'],
  providers: [MessageService]
})
export class OverlayPanelComponent implements OnInit {

  products!: Product[];

  selectedProduct!: Product;

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(products => this.products = products);
  }

  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
  }
}