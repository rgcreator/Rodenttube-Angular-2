import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightgalleryModule } from 'lightgallery/angular';
import { SongtekstenComponent } from './songteksten/songteksten.component';

@NgModule({
  declarations: [
    AppComponent,
    SongtekstenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LightgalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
