import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvancedComponent } from './advanced/advanced.component';
import { AutoPlayComponent } from './auto-play/auto-play.component';
import { CaptionComponent } from './caption/caption.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ProgrammaticComponent } from './programmatic/programmatic.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'programmatic', component: ProgrammaticComponent },
  { path: 'indicator', component: IndicatorComponent },
  { path: 'thumbnail', component: ThumbnailComponent },
  { path: 'navigator', component: NavigatorComponent },
  { path: 'responsive', component: ResponsiveComponent },
  { path: 'fullscreen', component: FullscreenComponent },
  { path: 'autoPlay', component: AutoPlayComponent },
  { path: 'caption', component: CaptionComponent },
  { path: 'advanced', component: AdvancedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleriaRoutingModule { }
