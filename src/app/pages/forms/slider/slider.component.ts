import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  val1!: number;

  val2: number = 50;

  val3!: number;

  val4!: number;

  rangeValues: number[] = [20,80];

  constructor() { }

  ngOnInit(): void {
  }

}
