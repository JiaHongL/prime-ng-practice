import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeTableRoutingModule } from './tree-table-routing.module';

import { DocumentationComponent } from './documentation/documentation.component';
import { TemplatingComponent } from './templating/templating.component';
import { PageComponent } from './page/page.component';
import { SortComponent } from './sort/sort.component';
import { SelectionComponent } from './selection/selection.component';
import { ColGroupComponent } from './col-group/col-group.component';
import { LazyComponent } from './lazy/lazy.component';
import { EditComponent } from './edit/edit.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ResizeComponent } from './resize/resize.component';
import { ReorderComponent } from './reorder/reorder.component';
import { ToggleComponent } from './toggle/toggle.component';
import { StyleComponent } from './style/style.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { FilterComponent } from './filter/filter.component';
import { SizeComponent } from './size/size.component';

@NgModule({
  declarations: [
    DocumentationComponent,
    TemplatingComponent,
    PageComponent,
    SortComponent,
    SelectionComponent,
    ColGroupComponent,
    LazyComponent,
    EditComponent,
    ScrollComponent,
    ResizeComponent,
    ReorderComponent,
    ToggleComponent,
    StyleComponent,
    ContextMenuComponent,
    ResponsiveComponent,
    FilterComponent,
    SizeComponent
  ],
  imports: [
    CommonModule,
    TreeTableRoutingModule
  ]
})
export class TreeTableModule { }
