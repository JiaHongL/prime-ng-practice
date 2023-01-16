import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  availableProducts!: Product[];

  selectedProducts!: Product[];

  draggedProduct!: Product | null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.selectedProducts = [];
    this.productService.getProductsSmall().then(products => this.availableProducts = products);
  }

  dragStart(product: Product) {
    this.draggedProduct = product;
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
      this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
    }
  }

  findIndex(product: Product) {
    let index = -1;
    for (let i = 0; i < this.availableProducts.length; i++) {
      if (product.id === this.availableProducts[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

}