import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})

export class AppComponent {
  title = 'Rodenttube';
  
  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}


// Current index of the files arrayy
// Get the audio element

/*
this.titletext = document.getElementById("title") as HTMLTitleElement;
  this.titletext.innerHTML = tilte;
  audio.onended = function() {
window.location.reload();
}
}
*/
//Load on run
window.onload = () => {
  new class playsong{
       public title2 = new String();
       public songtitle = new String();
       public songtitle2 = new String();
       public authorelement = document.getElementById("author") as HTMLElement;
    private audio = document.getElementById("audio") as HTMLVideoElement;
    private video = document.getElementById("video") as HTMLVideoElement;
 private songlist =  new Array<string>;
 private videolist = new Array<string>;
 public titlelement = document.getElementById("title") as HTMLElement;
 public buttonelement = document.getElementById("new-song") as HTMLButtonElement;
 public buttonelement2 = document.getElementById("pause") as HTMLButtonElement;
 public playvideo = document.getElementById("video") as HTMLVideoElement;
  public router = Router
 //add songs to array
 constructor(){
 
    
  this.songlist.push("../assets/muziek/tienduizendbeukennoten.ogg");
 this.songlist.push("../assets/muziek/cupido.ogg");
 this.songlist.push("../assets/muziek/DeBeverdans.ogg");
 this.songlist.push("../assets/muziek/DitisRodenttube.ogg");
 this.songlist.push("../assets/muziek/eetsla.ogg");
 this.songlist.push("../assets/muziek/Hijknaagtdemooiste.ogg");
 this.songlist.push("../assets/muziek/Iemandwaarikbomenmeekanknagen.ogg");
 this.songlist.push("../assets/muziek/IkbenRicardo.ogg");
 this.songlist.push("../assets/muziek/Ikknaaaghoutmetachtergrondmuziek.ogg");
 this.songlist.push("../assets/muziek/Kerstbever.ogg");
 this.songlist.push("../assets/muziek/Knagen.ogg");
 this.songlist.push("../assets/muziek/Levehetknaagdierleven.ogg");
 this.songlist.push("../assets/muziek/NibbleAgain.ogg");
 this.songlist.push("../assets/muziek/Niemandkanbeterknagendanik.ogg");
 this.songlist.push("../assets/muziek/RodenttubeRap.ogg");
 this.songlist.push("../assets/muziek/Uiteindelijkmaaktgeldniksuit.ogg");
 this.songlist.push("../assets/muziek/Vredewereldwijd.ogg");
 this.songlist.push("../assets/muziek/Wegaannaareenbos.ogg");
 this.songlist.push("../assets/muziek/Wedden.ogg");
 this.songlist.push("../assets/muziek/Wieknaagteraandieboom.ogg");
 this.songlist.push("../assets/muziek/Wood.ogg");
 this.songlist.push("../assets/muziek/Zoekdeconnectie.ogg");
 this.songlist.push("../assets/muziek/Zondermama.ogg");
 //Gets random song
 this.audio.src = this.songlist[Math.floor(Math.random() * this.songlist.length)];
  this.audio.autoplay = true;
 // play the audio
   this.audio.load();
   this.audio.play();
   //Gets title of song
   this.title2 = this.audio.src.replace("/assets/muziek/", "");
   this.title2 = this.title2.replace(".ogg", "");
   this.title2 = this.title2.replace(".ogg", "");
   this.title2 = this.title2.replace("%20", " ");
   this.title2 = this.title2.replace("http://localhost", " ");
   this.title2 = this.title2.replace(/[0-9]/g, " ");
   this.title2 = this.title2.replace(":", " ");
   this.title2 = this.title2.replace(/[%]/g, " ");
   //Sets title of song
 this.titlelement.innerHTML = this.title2.toString();
 //Sets author of song
 this.authorelement.innerHTML = "FC Knaagdier";
 //removes song from array when it ends and plays a new one
   this.audio.onended = () => {
 this.songlist.slice(this.songlist.indexOf(this.title2.toString()), 1);
 this.audio.src = this.songlist[Math.floor(Math.random() * this.songlist.length)];
 this.audio.load();
 this.audio.play();
   }
 
   //Pause button
   this.buttonelement2.onclick = () => {
     if (this.audio.paused == false){
       this.audio.pause();
       this.buttonelement2.innerHTML = "Play";
     }
     else{
       this.audio.play();
       this.buttonelement2.innerHTML = "Pause";
     }
   }
   //change to video
   this.playvideo.onclick = () => {
    alert(ActivatedRoute);
    if (ActivatedRoute.toString() == '/login'){
      (document.getElementById("audio")as HTMLVideoElement).style.display = "none";
      (document.getElementById("audio")as HTMLVideoElement).pause;
 (document.getElementById("new-song") as HTMLButtonElement).style.display = "none";
 (document.getElementById("pause")as HTMLButtonElement).style.display = "none";
      this.songlist.length = 0;
          this.videolist.push("../../assets/video/Aankondigingnieuwewebsiterudenttube.nl.webm");
          this.videolist.push("../../assets/video/ApplewilManchesterUnitedovernemenmeme.webm");
          this.videolist.push("../../assets/video/BezigmeteenAlexaSkill.webm");
          this.video.src = this.songlist[Math.floor(Math.random() * this.songlist.length)];
          this.video.autoplay = true;
         // play the video
         this.video.load();
           this.video.play();
      this.video.onended = () => {
 this.songlist.slice(this.songlist.indexOf(this.title2.toString()), 1);
 this.audio.src = this.songlist[Math.floor(Math.random() * this.songlist.length)];
 this.audio.load();
 this.audio.play();
   }
  }else if (window.location.href == "http://localhost:4200/"){
  (document.getElementById("new-video") as HTMLButtonElement).style.display = "none";
  (document.getElementById("pausevideo")as HTMLButtonElement).style.display = "none";
}
   }
   //Next song button
   this.buttonelement.onclick = () => {
     //Gets invisibly the full title of the song to remove it from the array
     this.songtitle2 = this.audio.src;
     this.songtitle2 = this.songtitle2.replace("http://localhost", "");
     this.songtitle2 = this.songtitle2.replace(/[0-9]/g, "");
     this.songtitle2 = this.songtitle2.replace(":", "");
     this.songtitle2 = this.songtitle2.replace("/assets", "../assets");
     //removes song from array when it ends and plays a new one
     this.songlist.splice(this.songlist.indexOf(this.songtitle2.toString()), 1);
     //Gets random song
 this.audio.src = this.songlist[Math.floor(Math.random() * this.songlist.length)];
 this.audio.load();
 this.audio.play();
 //Gets title of song to display
 this.title2 = this.audio.src.replace("/assets/muziek/", "");
   this.title2 = this.title2.replace(".ogg", "");
   this.title2 = this.title2.replace(".ogg", "");
   this.title2 = this.title2.replace("%20", " ");
   this.title2 = this.title2.replace("http://localhost", " ");
   this.title2 = this.title2.replace(/[0-9]/g, " ");
   this.title2 = this.title2.replace(":", " ");
   this.title2 = this.title2.replace(/[%]/g, " ");
   this.titlelement.innerHTML = this.title2.toString();
   //Reload page if no songs are left
   if (this.songlist.length == 0){
     window.location.reload();
   }
 }
  }
  }
 }
 