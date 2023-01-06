
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
import { InputGroupComponent } from './input-group/input-group.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InvalidStateComponent } from './invalid-state/invalid-state.component';
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
    FloatLabelComponent,
    InputGroupComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    TextareaComponent,
    InputNumberComponent,
    InvalidStateComponent,
    KnobComponent,
    KeyFilterComponent,
    ListboxComponent,
    MultiSelectComponent,
    PasswordComponent,
    RadioButtonComponent,
    RatingComponent,
    SliderComponent,
    SelectButtonComponent,
    ToggleButtonComponent,
    TreeSelectComponent,
    TriStateCheckboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    PrimeNgModule,
    FormsModule,
  ]
})
export class FormModule { }
