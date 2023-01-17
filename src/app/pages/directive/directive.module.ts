import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from 'src/app/primeng.module';

import { DirectiveRoutingModule } from './directive-routing.module';

import { DeferComponent } from './defer/defer.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { RippleComponent } from './ripple/ripple.component';

@NgModule({
  declarations: [
    DeferComponent,
    FocusTrapComponent,
    StyleClassComponent,
    RippleComponent
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule,
    PrimeNgModule
  ]
})
export class DirectiveModule { }
