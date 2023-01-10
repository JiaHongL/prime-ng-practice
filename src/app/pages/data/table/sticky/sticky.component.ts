import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent implements OnInit {

  customers!: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => this.customers = customers);
  }
}
