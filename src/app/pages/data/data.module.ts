import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { GMapComponent } from './g-map/g-map.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PickListComponent } from './pick-list/pick-list.component';


@NgModule({
  declarations: [
    DataViewComponent,
    FullCalendarComponent,
    GMapComponent,
    OrderListComponent,
    OrgChartComponent,
    PaginatorComponent,
    PickListComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule
  ]
})
export class DataModule { }
