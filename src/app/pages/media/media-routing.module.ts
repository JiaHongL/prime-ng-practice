import { CarouselComponent } from './carousel/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'galleria', loadChildren: () => import('./galleria/galleria.module').then(m => m.GalleriaModule) },
  { path: 'image', component: ImageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
