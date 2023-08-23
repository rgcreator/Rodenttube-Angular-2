import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayvideoComponent } from './playvideo/playvideo.component';

const routes: Routes = [
  { path: 'playvideo', component: PlayvideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
