import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  checked1: boolean = false;

  checked2: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
