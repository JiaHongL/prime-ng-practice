import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-model',
  templateUrl: './chart-model.component.html',
  styleUrls: ['./chart-model.component.scss']
})
export class ChartModelComponent { 

  data: any;

  options: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset 111',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset 222',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }

  ngOnInit() {
    this.options = {
      title: {
          display: true,
          text: 'My Title',
          fontSize: 16
      },
      legend: {
          position: 'bottom'
      }
  };
  }

  selectData(event:any){
    console.log('selectData event',event);
  }

}
