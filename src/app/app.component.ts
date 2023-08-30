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
// Get the audioenvideo element

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
    public author = new String();
     public  title2 = new String();
     public  songtitle2 = new String;
       public Audiolist = new Array;
      public videolist = new Array;
      public authorelement = document.getElementById("author") as HTMLElement;
      public audioenvideo = document.getElementById("audioenvideo") as HTMLVideoElement;
  public  titlelement = document.getElementById("title") as HTMLElement;
 public buttonelement = document.getElementById("new-song") as HTMLButtonElement;
public  buttonelement2 = document.getElementById("pause")as HTMLButtonElement;
public changevideobutton = document.getElementById("changevideobutton") as HTMLButtonElement;
 //add songs to array
 constructor(){
 this.Audiolist.push("../assets/muziek/DitisRodenttube.ogg");
 this.Audiolist.push("../assets/muziek/eetsla.ogg");
 this.Audiolist.push("../assets/muziek/Kerstbever.ogg");
 this.Audiolist.push("../assets/muziek/Knagen.ogg");
 this.Audiolist.push("../assets/muziek/NibbleAgain.ogg");
 this.Audiolist.push("../assets/muziek/Niemandkanbeterknagendanik.ogg");
 this.Audiolist.push("../assets/muziek/RodenttubeRap.ogg");
 this.Audiolist.push("../assets/muziek/Uiteindelijkmaaktgeldniksuit.ogg");
 this.Audiolist.push("../assets/muziek/Wegaannaareenbos.ogg");
 this.Audiolist.push("../assets/muziek/Wedden.ogg");
 this.Audiolist.push("../assets/muziek/Wood.ogg");
 this.Audiolist.push("../assets/muziek/Zoekdeconnectie.ogg");
this.Audiolist.push("../assets/muziek/Ikknaaghoutvoor10.ogg");
this.Audiolist.push("../assets/muziek/Ikgaknagen.mp3");
 //Gets random song
 this.audioenvideo.src = this.Audiolist[Math.floor(Math.random() * this.Audiolist.length)];
  this.audioenvideo.autoplay = true;
 // play the audioenvideo
   this.audioenvideo.load();
   this.audioenvideo.play();
   //Gets title of song
   this.title2 = this.audioenvideo.src.replace("/assets/muziek/", "");
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
 
   //Pause button
   this.buttonelement2.onclick = () => {
     if (this.audioenvideo.paused == false){
       this.audioenvideo.pause();
       this.buttonelement2.innerHTML = "Play";
     }
     else{
       this.audioenvideo.play();
       this.buttonelement2.innerHTML = "Pause";
     }
   }
   this.changevideobutton.onclick = () => {
    new class playvideo{
    public titlelement = document.getElementById("title") as HTMLElement;
    public authorelement = document.getElementById("author") as HTMLElement;
    public audioenvideo = document.getElementById("audioenvideo") as HTMLVideoElement;
    videolist = new Array;
    titlevideo = new String;
    title2 = new String;
    constructor(){
 this.videolist.push("../assets/video/Aankondigingnieuwewebsiterudenttube.nl.webm");
 this.videolist.push("../assets/video/WatkanjelerenvaneenInstagramvideovandaughtersdiary.webm");
 this.videolist.push("../assets/video/Onderhandelingenfnvenov.webm");
 this.videolist.push("../assets/video/BezigmeteenAlexaSkill.webm");
 this.videolist.push("../assets/video/DeERUvoertverbodinopolieuitRusland.webm");
 this.videolist.push("../assets/video/Deknaagdiercastkomtonline.webm");
 this.videolist.push("../assets/video/Dewaarheidoverdevluchtelingencrisis.webm")
 this.videolist.push("../assets/video/Geencompensatievoorkinderopvang.webm");
 this.videolist.push("../assets/video/Gokreclamesopalgemeenpubliekgaanverbodenworden.webm");
 this.videolist.push("../assets/video/HamsterAdajawordtgepest.webm");
 this.videolist.push("../assets/video/JakeDankwoordheeftgezegddathijhomois.webm");
 this.videolist.push("../assets/video/KlimaatprotestBeverwijk.webm");
 this.videolist.push("../assets/video/KnaagdierlaatgrafsteenmakenvaninternetExplorer.webm");
 this.videolist.push("../assets/video/MarkdeBeverheeftsms'jesverwijderd.webm");
 this.videolist.push("../assets/video/Nethoutgaatdelenduurdermaken.webm");
 this.videolist.push("../assets/video/RadiovijfdrieachtvoorprinsesMaximafoundation.webm");
 this.videolist.push("../assets/video/RodenttubestaatindePlayStore.webm");
 this.videolist.push("../assets/video/Siebertvanhoutenheeftfraudegepleegdmethoutkapjes.webm");
 this.videolist.push("../assets/video/StichtingdeknoevelinMaastricht.webm");
 this.videolist.push("../assets/video/Watalsdropshopreclameseerlijkzijn.webm");
 this.videolist.push("../assets/video/WatkanjelerenvaneenInstagramvideovandaughtersdiary.webm");
 this.videolist.push("../assets/video/Wijalsknaagdierenzeggennietéén.webm");
 this.videolist.push("../assets/video/Wijalsknaagdierenzeggenniettwee.webm");
//get random video
 this.title2 = this.videolist[Math.floor(Math.random() * this.videolist.length)];

  //removes song from array when it ends and plays a new one     //Gets random song
   //Sets author of song
 //Gets random song
  this.titlelement.innerHTML = this.title2.toString();
 this.audioenvideo.src =  this.title2.toString();
 this.audioenvideo.load();
 this.audioenvideo.play();   //Gets title of song

 this.title2 = this.audioenvideo.src.replace("/assets/video/", "");
 this.title2 = this.title2.replace(".webm", "");
 this.title2 = this.title2.replace("%20", " ");
 this.title2 = this.title2.replace("http://localhost", " ");
 this.title2 = this.title2.replace(/[0-9]/g, " ");
 this.title2 = this.title2.replace(":", " ");
 this.title2 = this.title2.replace(/[%]/g, " ");
   //Sets title of song
 this.authorelement.innerHTML = "FC Knaagdier";

   //Sets title of song
 this.titlelement.innerHTML = this.title2.toString();
   //Reload page if no songs are left   
   }
    } 
   } //Next song button
   this.buttonelement.onclick = () => {
     //Gets invisibly the full title of the song to remove it from the array
     this.songtitle2 = this.audioenvideo.src;
     this.songtitle2 = this.songtitle2.replace("http://localhost", "");
     this.songtitle2 = this.songtitle2.replace(/[0-9]/g, "");
     this.songtitle2 = this.songtitle2.replace(":", "");
     this.songtitle2 = this.songtitle2.replace("/assets", "../assets");
     //removes song from array when it ends and plays a new one
     this.Audiolist.splice(this.Audiolist.indexOf(this.songtitle2.toString()), 1);
     //Gets random song
 this.audioenvideo.src = this.Audiolist[Math.floor(Math.random() * this.Audiolist.length)];
 this.audioenvideo.load();
 this.audioenvideo.play();
 //Gets title of song to display
 this.title2 = this.audioenvideo.src.replace("/assets/muziek/", "");
   this.title2 = this.title2.replace(".ogg", "");
   this.title2 = this.title2.replace(".ogg", "");
   this.title2 = this.title2.replace("%20", " ");
   this.title2 = this.title2.replace("http://localhost", " ");
   this.title2 = this.title2.replace(/[0-9]/g, " ");
   this.title2 = this.title2.replace(":", " ");
   this.title2 = this.title2.replace(/[%]/g, " ");
   this.titlelement.innerHTML = this.title2.toString();
   //Reload page if no songs are left
   if (this.Audiolist.length == 0){
     window.location.reload();
   }
 }
  }
  }
 }
 