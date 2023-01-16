import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

import { PrimeNgModule } from './../../primeng.module';

@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    DragAndDropRoutingModule,
    PrimeNgModule
  ]
})
export class DragAndDropModule { }
