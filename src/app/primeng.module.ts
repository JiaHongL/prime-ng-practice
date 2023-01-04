import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  exports: [
    MenubarModule,
    MenuModule,
    AutoCompleteModule
  ],
})
export class PrimeNgModule {}
