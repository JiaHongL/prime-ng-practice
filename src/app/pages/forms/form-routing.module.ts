import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ChipsComponent } from './chips/chips.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { EditorComponent } from './editor/editor.component';
import { FloatLabelComponent } from './float-label/float-label.component';

const routes: Routes = [
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'cascade-select', component: CascadeSelectComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'float-label', component: FloatLabelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
