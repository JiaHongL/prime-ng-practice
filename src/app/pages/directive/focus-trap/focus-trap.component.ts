import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-trap',
  templateUrl: './focus-trap.component.html',
  styleUrls: ['./focus-trap.component.scss']
})
export class FocusTrapComponent implements OnInit {

  selectedCity!: string;

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
