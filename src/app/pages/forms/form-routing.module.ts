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
import { InputGroupComponent } from './input-group/input-group.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InvalidStateComponent } from './invalid-state/invalid-state.component';
import { TextareaComponent } from './textarea/textarea.component';
import { KnobComponent } from './knob/knob.component';
import { KeyFilterComponent } from './key-filter/key-filter.component';
import { ListboxComponent } from './listbox/listbox.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { PasswordComponent } from './password/password.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RatingComponent } from './rating/rating.component';
import { SliderComponent } from './slider/slider.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { TriStateCheckboxComponent } from './tri-state-checkbox/tri-state-checkbox.component';

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
  { path: 'input-group', component: InputGroupComponent },
  { path: 'input-mask', component: InputMaskComponent },
  { path: 'input-switch', component: InputSwitchComponent },
  { path: 'input-text', component: InputTextComponent },
  { path: 'input-textarea', component: TextareaComponent },
  { path: 'input-number', component: InputNumberComponent },
  { path: 'input-text', component: InputTextComponent },
  { path: 'invalid-state', component: InvalidStateComponent },
  { path: 'knob', component: KnobComponent },
  { path: 'key-filter', component: KeyFilterComponent },
  { path: 'list-box', component: ListboxComponent },
  { path: 'multi-select', component: MultiSelectComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'select-button', component: SelectButtonComponent },
  { path: 'toggle-button', component: ToggleButtonComponent },
  { path: 'tree-select', component: TreeSelectComponent },
  { path: 'tri-state-checkbox', component: TriStateCheckboxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
