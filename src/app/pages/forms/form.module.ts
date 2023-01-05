
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { PrimeNgModule } from 'src/app/primeng.module';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AutoCompleteComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class FormModule { }
