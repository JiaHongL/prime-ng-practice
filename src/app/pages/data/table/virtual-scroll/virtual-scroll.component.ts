import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Car, CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
  providers: [MessageService],
})
export class VirtualScrollComponent implements OnInit {
  cars!: Car[];

  virtualCars!: Car[];

  cols!: any[];

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];

    this.cars = Array.from({ length: 10000 }).map((_, i) =>
      this.carService.generateCar(i + 1)
    );

    this.virtualCars = Array.from({ length: 10000 });

  }

  loadCarsLazy(event: LazyLoadEvent) {

    console.log('loadCarsLazy',event);

    //simulate remote connection with a timeout
    setTimeout(() => {

      const first = event?.first || 0;
      const rows = event?.rows || 0;

      //load data of required page
      let loadedCars = this.cars.slice(first, first + rows);

      //populate page of virtual cars
      this.virtualCars.splice(
        first,
        rows,
        ...loadedCars
      );

      this.virtualCars = [...this.virtualCars]

    }, Math.random() * 1000 + 250);

  }
}
