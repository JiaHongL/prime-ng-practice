import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  constructor(private primengConfig: PrimeNGConfig) { }
}
