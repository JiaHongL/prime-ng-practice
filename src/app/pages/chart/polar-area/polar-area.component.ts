import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig, AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.scss']
})
export class PolarAreaComponent implements OnInit {

  data: any;

  chartOptions: any;

  subscription!: Subscription;

  config!: AppConfig;

  constructor(private configService: AppConfigService) {}

  ngOnInit() {
      this.data = {
          datasets: [{
              data: [
                  11,
                  16,
                  7,
                  3,
                  14
              ],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#26C6DA",
                  "#7E57C2"
              ],
              label: 'My dataset'
          }],
          labels: [
              "Red",
              "Green",
              "Yellow",
              "Grey",
              "Blue"
          ]
      };

      this.config = this.configService.config;
      // this.updateChartOptions();
      // this.subscription = this.configService.configUpdate$.subscribe(config => {
      //     this.config = config;
      //     this.updateChartOptions();
      // });
  }

  updateChartOptions() {
      this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }

  getLightTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          },
          scales: {
              r: {
                  grid: {
                      color: '#ebedef'
                  }
              }
          }
      }
  }

  getDarkTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          },
          scales: {
              r: {
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              }
          }
      }
  }
}
