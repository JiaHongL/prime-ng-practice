import { VirtualScrollerComponent } from './virtual-scroller/virtual-scroller.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataViewComponent } from './data-view/data-view.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { GMapComponent } from './g-map/g-map.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: 'data-view', component: DataViewComponent },
  { path: 'full-calendar', component: FullCalendarComponent },
  { path: 'g-map', component: GMapComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'org-chart', component: OrgChartComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'pick-list', component: PickListComponent },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'time-line', component: TimelineComponent },
  { path: 'tree', loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule) },
  { path: 'tree-table', loadChildren: () => import('./tree-table/tree-table.module').then(m => m.TreeTableModule) },
  { path: 'virtual-scroller', component: VirtualScrollerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
