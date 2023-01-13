import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from 'src/app/primeng.module';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuModelComponent } from './menu-model/menu-model.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DockComponent } from './dock/dock.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { MenuComponent } from './menu/menu.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { SildeMenuComponent } from './silde-menu/silde-menu.component';
import { StepsComponent } from './steps/steps.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { TieredMenuComponent } from './tiered-menu/tiered-menu.component';

@NgModule({
  declarations: [
    MenuModelComponent,
    BreadcrumbComponent,
    ContextMenuComponent,
    DockComponent,
    MegaMenuComponent,
    MenuComponent,
    MenubarComponent,
    PanelMenuComponent,
    SildeMenuComponent,
    StepsComponent,
    TabMenuComponent,
    TieredMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class MenuModule { }
