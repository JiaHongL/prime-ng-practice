import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from 'src/app/primeng.module';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { FilterServiceComponent } from './filter-service/filter-service.component';

@NgModule({
  declarations: [
    FilterServiceComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    PrimeNgModule
  ]
})
export class UtilitiesModule { }
