import { CarouselComponent } from './carousel/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'galleria', loadChildren: () => import('./galleria/galleria.module').then(m => m.GalleriaModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
