import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car, CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss'],
  providers: [MessageService]
})
export class DeferComponent {

  cars!: Car[];

  constructor(private carService: CarService, private messageService: MessageService) { }

  initData() {
    this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

}
