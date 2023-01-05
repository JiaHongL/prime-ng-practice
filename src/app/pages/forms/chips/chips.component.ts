import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  values1!: string[];
    
  values2!: string[];

  values3!: string[];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
