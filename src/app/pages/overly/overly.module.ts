import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from 'src/app/primeng.module';

import { OverlyRoutingModule } from './overly-routing.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { OverlayPanelComponent } from './overlay-panel/overlay-panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    ConfirmPopupComponent,
    DialogComponent,
    DynamicDialogComponent,
    OverlayPanelComponent,
    SidebarComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    OverlyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class OverlyModule { }
