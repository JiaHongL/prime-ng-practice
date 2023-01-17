import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeferComponent } from './defer/defer.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { RippleComponent } from './ripple/ripple.component';
import { StyleClassComponent } from './style-class/style-class.component';

const routes: Routes = [
  { path: 'defer', component: DeferComponent },
  { path: 'focus-trap', component: FocusTrapComponent },
  { path: 'ripple', component: RippleComponent },
  { path: 'style-class', component: StyleClassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
