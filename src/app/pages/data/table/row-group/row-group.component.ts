import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-row-group',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.scss']
})
export class RowGroupComponent implements OnInit {
  customers!: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersMedium().then(data => {
      this.customers = data;
    });
  }

  calculateCustomerTotal(name:string) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer?.representative?.name === name) {
          total++;
        }
      }
    }

    return total;
  }
}
