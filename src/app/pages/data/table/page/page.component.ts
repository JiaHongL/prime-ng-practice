import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  customers!: Customer[];

  first = 0;

  rows = 10;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => this.customers = customers);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === (this.customers.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}
