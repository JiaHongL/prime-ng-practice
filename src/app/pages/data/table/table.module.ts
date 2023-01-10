import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';

import { DocumentationComponent } from './documentation/documentation.component';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TemplatingComponent } from './templating/templating.component';
import { SizeComponent } from './size/size.component';
import { GridlinesComponent } from './gridlines/gridlines.component';
import { StripedComponent } from './striped/striped.component';
import { ColGroupComponent } from './col-group/col-group.component';
import { PageComponent } from './page/page.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { SelectionComponent } from './selection/selection.component';
import { LazyComponent } from './lazy/lazy.component';
import { ScrollComponent } from './scroll/scroll.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { FlexScrollComponent } from './flex-scroll/flex-scroll.component';
import { RowExpandComponent } from './row-expand/row-expand.component';
import { EditComponent } from './edit/edit.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ResizeComponent } from './resize/resize.component';
import { ReorderComponent } from './reorder/reorder.component';
import { RowGroupComponent } from './row-group/row-group.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ExportComponent } from './export/export.component';
import { StateComponent } from './state/state.component';
import { StyleComponent } from './style/style.component';
import { StickyComponent } from './sticky/sticky.component';
import { CrudComponent } from './crud/crud.component';
import { PrimeNgModule } from 'src/app/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocumentationComponent,
    BasicComponent,
    DynamicComponent,
    TemplatingComponent,
    SizeComponent,
    GridlinesComponent,
    StripedComponent,
    ColGroupComponent,
    PageComponent,
    SortComponent,
    FilterComponent,
    SelectionComponent,
    LazyComponent,
    ScrollComponent,
    VirtualScrollComponent,
    FlexScrollComponent,
    RowExpandComponent,
    EditComponent,
    ToggleComponent,
    ResizeComponent,
    ReorderComponent,
    RowGroupComponent,
    ContextMenuComponent,
    ResponsiveComponent,
    ExportComponent,
    StateComponent,
    StyleComponent,
    StickyComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class TableModule { }
