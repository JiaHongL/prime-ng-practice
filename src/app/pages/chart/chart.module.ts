import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartModelComponent } from './chart-model/chart-model.component';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { LineComponent } from './line/line.component';
import { PolarAreaComponent } from './polar-area/polar-area.component';
import { PieComponent } from './pie/pie.component';
import { RadarComponent } from './radar/radar.component';
import { ComboComponent } from './combo/combo.component';


@NgModule({
  declarations: [
    ChartModelComponent,
    BarComponent,
    DoughnutComponent,
    LineComponent,
    PolarAreaComponent,
    PieComponent,
    RadarComponent,
    ComboComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
