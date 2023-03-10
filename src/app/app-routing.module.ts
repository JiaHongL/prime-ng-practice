import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'icon', loadChildren: () => import('./pages/icon/icon.module').then(m => m.IconModule) }, 
  { path: 'form', loadChildren: () => import('./pages/forms/form.module').then(m => m.FormModule) },
  { path: 'button', loadChildren: () => import('./pages/button/button.module').then(m => m.ButtonModule) },
  { path: 'data', loadChildren: () => import('./pages/data/data.module').then(m => m.DataModule) },
  { path: 'panel', loadChildren: () => import('./pages/panel/panel.module').then(m => m.PanelModule) },
  { path: 'overly', loadChildren: () => import('./pages/overly/overly.module').then(m => m.OverlyModule) },
  { path: 'file', loadChildren: () => import('./pages/file/file.module').then(m => m.FileModule) },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'chart', loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule) },
  { path: 'message', loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule) },
  { path: 'media', loadChildren: () => import('./pages/media/media.module').then(m => m.MediaModule) },
  { path: 'drag-and-drop', loadChildren: () => import('./pages/drag-and-drop/drag-and-drop.module').then(m => m.DragAndDropModule) },
  { path: 'misc', loadChildren: () => import('./pages/misc/misc.module').then(m => m.MiscModule) },
  { path: 'directive', loadChildren: () => import('./pages/directive/directive.module').then(m => m.DirectiveModule) },
  { path: 'utilities', loadChildren: () => import('./pages/utilities/utilities.module').then(m => m.UtilitiesModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
