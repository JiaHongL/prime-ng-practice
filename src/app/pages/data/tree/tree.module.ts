import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';

import { DocumentationComponent } from './documentation/documentation.component';
import { TemplatingComponent } from './templating/templating.component';
import { SelectionComponent } from './selection/selection.component';
import { FilterComponent } from './filter/filter.component';
import { LazyComponent } from './lazy/lazy.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { PrimeNgModule } from 'src/app/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DocumentationComponent,
    TemplatingComponent,
    SelectionComponent,
    FilterComponent,
    LazyComponent,
    ScrollComponent,
    ContextMenuComponent,
    DragDropComponent,
    HorizontalComponent
  ],
  imports: [
    CommonModule,
    TreeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class TreeModule { }
