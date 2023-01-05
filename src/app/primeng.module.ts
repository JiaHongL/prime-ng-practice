import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  exports: [
    MenubarModule,
    MenuModule,
    AutoCompleteModule,
    CalendarModule
  ],
})
export class PrimeNgModule { }
