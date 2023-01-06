import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  disabled: boolean = true;

  value1!: string;

  value2!: string;

  value3!: string;

  value4!: string;

  value5: string = 'Disabled';

  value6 = 1;

  value7 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
