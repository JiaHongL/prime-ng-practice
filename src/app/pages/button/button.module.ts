import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';

import { PrimeNgModule } from 'src/app/primeng.module';

import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SplitButtonComponent,
    SpeedDialComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    PrimeNgModule
  ]
})
export class ButtonModule { }
