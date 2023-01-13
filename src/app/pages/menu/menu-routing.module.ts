import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DockComponent } from './dock/dock.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { MenuModelComponent } from './menu-model/menu-model.component';
import { MenuComponent } from './menu/menu.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { SildeMenuComponent } from './silde-menu/silde-menu.component';
import { StepsComponent } from './steps/steps.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { TieredMenuComponent } from './tiered-menu/tiered-menu.component';

const routes: Routes = [
  { path: 'menu-model', component: MenuModelComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'context-menu', component: ContextMenuComponent },
  { path: 'dock', component: DockComponent },
  { path: 'mega-menu', component: MegaMenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menubar', component: MenubarComponent },
  { path: 'panel-menu', component: PanelMenuComponent },
  { path: 'slide-menu', component: SildeMenuComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'tab-menu', component: TabMenuComponent },
  { path: 'tiered-menu', component: TieredMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
