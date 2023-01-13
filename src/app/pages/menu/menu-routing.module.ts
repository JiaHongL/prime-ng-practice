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
  { path: 'MenuModel', component: MenuModelComponent },
  { path: 'Breadcrumb', component: BreadcrumbComponent },
  { path: 'ContextMenu', component: ContextMenuComponent },
  { path: 'Dock', component: DockComponent },
  { path: 'MegaMenu', component: MegaMenuComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Menubar', component: MenubarComponent },
  { path: 'PanelMenu', component: PanelMenuComponent },
  { path: 'SlideMenu', component: SildeMenuComponent },
  { path: 'Steps', component: StepsComponent },
  { path: 'TabMenu', component: TabMenuComponent },
  { path: 'TieredMenu', component: TieredMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
