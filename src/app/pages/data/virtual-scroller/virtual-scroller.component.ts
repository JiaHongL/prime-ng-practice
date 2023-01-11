import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, SelectItem } from 'primeng/api';
import { VirtualScroller } from 'primeng/virtualscroller';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: ['./virtual-scroller.component.scss']
})
export class VirtualScrollerComponent implements OnInit {

  @ViewChild('vs') vs!: VirtualScroller;

  products!: Product[];

  virtualProducts!: Product[];

  sortKey!: string;

  sortOptions!: SelectItem[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = Array.from({ length: 10000 }).map(() =>
      this.productService.generatePrduct()
    );
    this.virtualProducts = Array.from({ length: 10000 });

    this.sortOptions = [
      { label: 'Cheapest First', value: 'price' },
      { label: 'Expensive First', value: '!price' },
    ];
  }

  loadCarsLazy(event: LazyLoadEvent) {
    // simulate remote connection with a timeout
    setTimeout(() => {

      const first = event?.first || 0;
      const rows = event?.rows || 0;

      //load data of required page
      let loadedProducts = this.products.slice(first, first + rows);

      //populate page of virtual cars
      this.virtualProducts.splice(
        first,
        rows,
        ...loadedProducts
      );

      this.virtualProducts = [...this.virtualProducts]

    }, 1000);
  }

  onSortChange() {
    if (this.sortKey.indexOf('!') === 0) this.sort(-1);
    else this.sort(1);
  }

  sort(order: number): void {

    let products = [...this.products];

    products.sort((data1, data2) => {
      let value1 = data1.price || 0;
      let value2 = data2.price || 0;
      let result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      return order * result;
    });

    this.products = products;
  }


  reset() {
    this.vs.scrollToIndex(0, 'smooth');
  }

}
