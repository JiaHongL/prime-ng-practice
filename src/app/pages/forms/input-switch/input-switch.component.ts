import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {

  checked!: boolean;

  checked2 = true;

  checked3: 'Yes' | 'No' = 'Yes';

  constructor() { }

  ngOnInit(): void {
  }

}
