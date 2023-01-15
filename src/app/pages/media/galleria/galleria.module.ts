import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriaRoutingModule } from './galleria-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ProgrammaticComponent } from './programmatic/programmatic.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { AutoPlayComponent } from './auto-play/auto-play.component';
import { CaptionComponent } from './caption/caption.component';
import { AdvancedComponent } from './advanced/advanced.component';


@NgModule({
  declarations: [
    DocumentationComponent,
    ProgrammaticComponent,
    IndicatorComponent,
    ThumbnailComponent,
    NavigatorComponent,
    ResponsiveComponent,
    FullscreenComponent,
    AutoPlayComponent,
    CaptionComponent,
    AdvancedComponent
  ],
  imports: [
    CommonModule,
    GalleriaRoutingModule
  ]
})
export class GalleriaModule { }
