import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './primeng.module';
import { ChartModule } from './pages/chart/chart.module';
import { MessagesModule } from './pages/messages/messages.module';
import { MediaModule } from './pages/media/media.module';
import { GalleriaModule } from './pages/media/galleria/galleria.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
    ChartModule,
    MessagesModule,
    MediaModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
