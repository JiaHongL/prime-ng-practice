import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  color1!: string;
    
  color2: string = '#1976D2';

  color3: any = {
    r: 100, g: 130, b: 150
  };

  color4: any = {
    h: 100, s: 50, b: 50
  };

  constructor() { }

  ngOnInit(): void {
  }

}
