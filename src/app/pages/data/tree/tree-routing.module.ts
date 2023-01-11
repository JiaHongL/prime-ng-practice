import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FilterComponent } from './filter/filter.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { LazyComponent } from './lazy/lazy.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SelectionComponent } from './selection/selection.component';
import { TemplatingComponent } from './templating/templating.component';

const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'templating', component: TemplatingComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'scroll', component: ScrollComponent },
  { path: 'context-menu', component: ContextMenuComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'horizontal', component: HorizontalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
