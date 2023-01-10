import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  customers1!: Customer[];

  customers2!: Customer[];

  selectedCustomer1!: Customer;

  selectedCustomer2!: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
      this.customerService.getCustomersMedium().then(data => this.customers1 = data);
      this.customerService.getCustomersMedium().then(data => this.customers2 = data);
  }

}
