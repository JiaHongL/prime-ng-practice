import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'icon', loadChildren: () => import('./pages/icon/icon.module').then(m => m.IconModule) }, 
  { path: 'form', loadChildren: () => import('./pages/forms/form.module').then(m => m.FormModule) },
  { path: 'button', loadChildren: () => import('./pages/button/button.module').then(m => m.ButtonModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
