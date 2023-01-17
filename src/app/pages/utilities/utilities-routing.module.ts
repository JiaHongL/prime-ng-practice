import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterServiceComponent } from './filter-service/filter-service.component';

const routes: Routes = [
  { path: 'filter-service', component: FilterServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
