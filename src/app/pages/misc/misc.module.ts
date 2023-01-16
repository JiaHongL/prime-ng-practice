import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
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
import { PrimeNgModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [
    AvatarComponent,
    BadgeComponent,
    BlockUIComponent,
    CaptchaComponent,
    ChipComponent,
    InplaceComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    ScrollTopComponent,
    SkeletonComponent,
    TagComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule,
    MiscRoutingModule,
    PrimeNgModule
  ]
})
export class MiscModule { }
