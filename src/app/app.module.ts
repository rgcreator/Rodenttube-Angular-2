import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightgalleryModule } from 'lightgallery/angular';
import { SongtekstenComponent } from './components/songteksten/songteksten.component';
import { playvideoComponent } from './components/playvideo/playvideo.component';
import { playaudioComponent } from './components/playaudio/playaudio.component';
const routes: Routes = [
  { path: 'songteksten', component: SongtekstenComponent },
  { path: 'playvideo', component: playvideoComponent },
  { path: 'playaudio', component: playaudioComponent },
  { path: '', redirectTo: '/songteksten', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    SongtekstenComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LightgalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SongtekstenComponent]
})
export class AppModule { }
