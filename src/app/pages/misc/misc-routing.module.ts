import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { BlockUIComponent } from './block-ui/block-ui.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { ChipComponent } from './chip/chip.component';
import { InplaceComponent } from './inplace/inplace.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { TagComponent } from './tag/tag.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  { path: 'avatar', component: AvatarComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'blockUI', component: BlockUIComponent },
  { path: 'captcha', component: CaptchaComponent },
  { path: 'chip', component: ChipComponent },
  { path: 'inplace', component: InplaceComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'scroll-top', component: ScrollTopComponent },
  { path: 'skeleton', component: SkeletonComponent },
  { path: 'tag', component: TagComponent },
  { path: 'terminal', component: TerminalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
