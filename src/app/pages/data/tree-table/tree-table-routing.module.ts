import { SizeComponent } from './size/size.component';
import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentationComponent } from './documentation/documentation.component';
import { PageComponent } from './page/page.component';
import { TemplatingComponent } from './templating/templating.component';
import { ColGroupComponent } from './col-group/col-group.component';
import { ResizeComponent } from './resize/resize.component';
import { ScrollComponent } from './scroll/scroll.component';
import { EditComponent } from './edit/edit.component';
import { LazyComponent } from './lazy/lazy.component';
import { SelectionComponent } from './selection/selection.component';
import { SortComponent } from './sort/sort.component';
import { ReorderComponent } from './reorder/reorder.component';
import { ToggleComponent } from './toggle/toggle.component';
import { StyleComponent } from './style/style.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ResponsiveComponent } from './responsive/responsive.component';

const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'templating', component: TemplatingComponent },
  { path: 'page', component: PageComponent },
  { path: 'sort', component: SortComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'col-group', component: ColGroupComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'edit', component: EditComponent },
  { path: 'scroll', component: ScrollComponent },
  { path: 'resize', component: ResizeComponent },
  { path: 'reorder', component: ReorderComponent },
  { path: 'toggle', component: ToggleComponent },
  { path: 'style', component: StyleComponent },
  { path: 'context-menu', component: ContextMenuComponent },
  { path: 'responsive', component: ResponsiveComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'size', component: SizeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeTableRoutingModule { }
