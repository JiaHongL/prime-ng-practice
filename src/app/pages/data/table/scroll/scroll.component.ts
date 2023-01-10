import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  customers!: Customer[];

  dialogVisible!: boolean;

  scrollableCols!: any[];

  frozenCols!: any[];

  unlockedCustomers!: any[];

  lockedCustomers!: any[];

  balanceFrozen: boolean = false;

  rowGroupMetadata: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersMedium().then(data => {
      this.customers = data
    });
    this.customerService.getCustomersMedium().then(data => this.unlockedCustomers = data);

    this.lockedCustomers = [
      {
        id: 5135,
        name: "Geraldine Bisset",
        country: {
          name: "France",
          code: "fr"
        },
        company: "Bisset Group",
        status: "proposal",
        date: "2019-05-05",
        activity: 0,
        representative: {
          name: "Amy Elsner",
          image: "amyelsner.png"
        }
      }
    ];

    this.frozenCols = [
      { field: 'name', header: 'Name' }
    ];

    this.scrollableCols = [
      { field: 'name', header: 'Name' },
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'company', header: 'Company' },
      { field: 'status', header: 'Status' },
      { field: 'activity', header: 'Activity' }
    ];
  }

  showDialog() {
    this.dialogVisible = true;
  }

  toggleLock(data: any, frozen: boolean, index: number) {
    if (frozen) {
      this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
      this.unlockedCustomers.push(data);
    }
    else {
      this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index);
      this.lockedCustomers.push(data);
    }

    this.unlockedCustomers.sort((val1, val2) => {
      return val1.id < val2.id ? -1 : 1;
    });
  }

  calculateCustomerTotal(name: string) {
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

  formatCurrency(value: any) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}
