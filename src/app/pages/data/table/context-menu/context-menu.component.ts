import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  providers: [MessageService]
})
export class ContextMenuComponent implements OnInit {
  products!: Product[];

  selectedProduct!: Product | null;

  items!: MenuItem[];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.items = [
      { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct) },
      { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct) }
    ];
  }

  viewProduct(product: Product | null) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product?.name });
  }

  deleteProduct(product: Product | null) {
    this.products = this.products.filter((p) => p.id !== product?.id);
    this.messageService.add({ severity: 'info', summary: 'Product Deleted', detail: product?.name });
    this.selectedProduct = null;
  }
}
