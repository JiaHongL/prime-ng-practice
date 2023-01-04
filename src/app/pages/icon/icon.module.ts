import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';
import { PrimeNgModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    IconRoutingModule,
    PrimeNgModule
  ]
})
export class IconModule { }
