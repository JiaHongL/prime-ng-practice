import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './bar/bar.component';
import { ChartModelComponent } from './chart-model/chart-model.component';
import { ComboComponent } from './combo/combo.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { PolarAreaComponent } from './polar-area/polar-area.component';
import { RadarComponent } from './radar/radar.component';

const routes: Routes = [
  { path: 'chart-model', component: ChartModelComponent },
  { path: 'bar', component: BarComponent },
  { path: 'doughnut', component:  DoughnutComponent},
  { path: 'line', component: LineComponent },
  { path: 'polar-area', component: PolarAreaComponent },
  { path: 'pie', component: PieComponent },
  { path: 'radar', component: RadarComponent },
  { path: 'combo', component: ComboComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
