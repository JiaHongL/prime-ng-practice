import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from 'src/app/primeng.module';

import { PanelRoutingModule } from './panel-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PanelComponent } from './panel/panel.component';
import { SplitterComponent } from './splitter/splitter.component';
import { ScrollPanelComponent } from './scroll-panel/scroll-panel.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    AccordionComponent,
    CardComponent,
    DividerComponent,
    FieldsetComponent,
    PanelComponent,
    SplitterComponent,
    ScrollPanelComponent,
    TabViewComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class PanelModule { }
