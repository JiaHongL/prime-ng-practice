
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { PrimeNgModule } from 'src/app/primeng.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';
import { FloatLabelComponent } from './float-label/float-label.component';

@NgModule({
  declarations: [
    AutoCompleteComponent,
    CalendarComponent,
    CascadeSelectComponent,
    CheckboxComponent,
    ChipsComponent,
    ColorPickerComponent,
    DropdownComponent,
    EditorComponent,
    FloatLabelComponent
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
