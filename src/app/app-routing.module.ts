import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongtekstenComponent } from './songteksten/songteksten.component';
const routes: Routes = [
  { path: 'songteksten', component: SongtekstenComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
