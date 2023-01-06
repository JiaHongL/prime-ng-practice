import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tri-state-checkbox',
  templateUrl: './tri-state-checkbox.component.html',
  styleUrls: ['./tri-state-checkbox.component.scss']
})
export class TriStateCheckboxComponent implements OnInit {

  value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
