import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplatingComponent } from './templating/templating.component';
import { SelectButtonComponent } from '../../forms/select-button/select-button.component';
import { ToggleButtonComponent } from '../../forms/toggle-button/toggle-button.component';
import { ColGroupComponent } from './col-group/col-group.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { CrudComponent } from './crud/crud.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EditComponent } from './edit/edit.component';
import { ExportComponent } from './export/export.component';
import { FilterComponent } from './filter/filter.component';
import { FlexScrollComponent } from './flex-scroll/flex-scroll.component';
import { GridlinesComponent } from './gridlines/gridlines.component';
import { LazyComponent } from './lazy/lazy.component';
import { PageComponent } from './page/page.component';
import { ReorderComponent } from './reorder/reorder.component';
import { ResizeComponent } from './resize/resize.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { RowExpandComponent } from './row-expand/row-expand.component';
import { RowGroupComponent } from './row-group/row-group.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SizeComponent } from './size/size.component';
import { SortComponent } from './sort/sort.component';
import { StateComponent } from './state/state.component';
import { StickyComponent } from './sticky/sticky.component';
import { StripedComponent } from './striped/striped.component';
import { StyleComponent } from './style/style.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'templating', component: TemplatingComponent },
  { path: 'size', component: SizeComponent },
  { path: 'gridlines', component: GridlinesComponent },
  { path: 'striped', component: StripedComponent },
  { path: 'colGroup', component: ColGroupComponent },
  { path: 'page', component: PageComponent },
  { path: 'sort', component: SortComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'selection', component: SelectButtonComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'scroll', component: ScrollComponent },
  { path: 'virtual-scroll', component: VirtualScrollComponent },
  { path: 'flex-scroll', component: FlexScrollComponent },
  { path: 'row-expand', component: RowExpandComponent },
  { path: 'edit', component: EditComponent },
  { path: 'toggle', component: ToggleButtonComponent },
  { path: 'resize', component: ResizeComponent },
  { path: 'reorder', component: ReorderComponent },
  { path: 'row-group', component: RowGroupComponent },
  { path: 'context-menu', component: ContextMenuComponent },
  { path: 'responsive', component: ResponsiveComponent },
  { path: 'export', component: ExportComponent },
  { path: 'state', component: StateComponent },
  { path: 'style', component: StyleComponent },
  { path: 'sticky', component: StickyComponent },
  { path: 'crud', component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
