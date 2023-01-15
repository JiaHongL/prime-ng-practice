import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { CarouselComponent } from './carousel/carousel.component';

import { PrimeNgModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    PrimeNgModule
  ]
})
export class MediaModule { }
