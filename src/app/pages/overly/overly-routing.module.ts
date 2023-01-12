import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { OverlayPanelComponent } from './overlay-panel/overlay-panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  { path: 'confirm-dialog', component: ConfirmDialogComponent },
  { path: 'confirm-popup', component: ConfirmPopupComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'dynamic-dialog', component: DynamicDialogComponent },
  { path: 'overlay-panel', component: OverlayPanelComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'tooltip', component: TooltipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlyRoutingModule { }
