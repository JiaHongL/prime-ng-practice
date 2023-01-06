import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  val1!: number;

  val2: number = 3;

  val3: number = 5;

  val4: number = 5;

  val5!: number;

  msg!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
