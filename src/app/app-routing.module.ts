import { NgModule } from '@angular/core';
import { playaudioComponent } from './components/playaudio/playaudio.component';
import { SongtekstenComponent } from './components/songteksten/songteksten.component';
import { Routes, RouterModule } from '@angular/router';
import { Appcomponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { playvideoComponent } from './components/playvideo/playvideo.component';
const routes: Routes = [
    { path: '', component: Appcomponent},
    { path: 'songteksten', component: SongtekstenComponent },
    { path: 'playaudio', component: playaudioComponent },
    { path: 'playvideo', component: playvideoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
