import { Component, OnInit } from '@angular/core';
import { Car, CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-inplace',
  templateUrl: './inplace.component.html',
  styleUrls: ['./inplace.component.scss']
})
export class InplaceComponent implements OnInit {

  cars!: Car[];
        
  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

}
