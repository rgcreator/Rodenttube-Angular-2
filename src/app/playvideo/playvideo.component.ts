import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  viewProviders: [PlayvideoComponent],
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.css']
})
export class PlayvideoComponent {
  
}
window.onload = () => {
if (window.location.pathname == "/playvideo"){
new class hideaudio {
  constructor(){
    (document.getElementById("audioenvideo") as HTMLVideoElement).style.display = "none";
}
}
}
}