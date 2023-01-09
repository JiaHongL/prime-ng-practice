import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  first: number = 0;

  totalRecords: number = 120;

  totalRecords2: number = 12;

  onPageChange(event: any) {
    this.first = event.first;
  }

  refresh() {
    this.first = 0;
  }
}
