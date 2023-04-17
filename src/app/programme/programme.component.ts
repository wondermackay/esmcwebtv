import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardVideo } from '../models/card-video.model';
import { ProgCard } from '../models/prog-card.model';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent {
 // Declaration des Cards des PROGRAMMES

id:number=0
detprog: any;
  nom:String="";
  img:String="";
  tprog = [
  {
    id: 1,
    title:'Arche de Noé',
    img: "./assets/image/arch.webp",
  },
  {
    id: 2,
    title:'Le Jardin d Eden',
    img: "./assets/image/jardin.webp",
  },
  {
    id: 3,
    title:'Resurection',
    img: "./assets/image/resurection.webp",
  },
  {
    id: 4,
    title:'Le Bâton de Moïse',
    img: "./assets/image/b.webp",
  },
  {
    id: 5,
    title:'Le Bâton de Moïse',
    img: "./assets/image/b.webp",
  },
  {
    id: 6,
    title:'Resurection',
    img: "./assets/image/resurection.webp",
  },
  {
    id: 7,
    title:'Sceau des Prophetes',
    img: "./assets/image/sceau.webp",
  },
  {
    id: 8,
    title:'Mashia Messie Mahdi',
    img: "./assets/image/3m.webp",
  },
  {
    id: 9,
    title:'Jour de la Religion',
    img: "./assets/image/jourreligion.webp",
  },
  {
    id: 10,
    title:'Jour dernier',
    img: "./assets/image/jourdernier.webp",
  },
  {
    id: 11,
    title:'Resurection',
    img: "./assets/image/resurection.webp",
  },
  {
    id: 12,
    title:'Resurection',
    img: "./assets/image/resurection.webp",
  },
 
];
 progCard1!: ProgCard;
 progCard2!: ProgCard;
 progCard3!: ProgCard;
 progCard4!: ProgCard;
 progCard5!: ProgCard;
 progCard6!: ProgCard;
 progCard7!: ProgCard;
 progCard8!: ProgCard;
 progCard9!: ProgCard;
 progCard10!: ProgCard;
 progCard11!: ProgCard;

 // Declaration des Cards des VIDEOS
 cardVideo1!: CardVideo;
 cardVideo2!: CardVideo;
 cardVideo3!: CardVideo;
 cardVideo4!: CardVideo;
 cardVideo5!: CardVideo;
 cardVideo6!: CardVideo;
 cardVideo7!: CardVideo;
 cardVideo8!: CardVideo;


 ngOnInit() {
   window.scrollTo(0, 0);

   // AIzaSyAuNzmHr2U2naJQJwm8LCyowx6PeEFNST
   const titreVideo = document.getElementById('video__title');
   const titreDescription = document.getElementById('video__description');

   const videoId = document
     .querySelector('iframe')
     ?.getAttribute('src')
     ?.split('/')
     .reverse()[0];
   const apiKey = 'AIzaSyAuNzmHr2U2naJQJwm8LCyowx6PeEFNSTY';

   const xhr = new XMLHttpRequest();
   xhr.open(
     'GET',
     `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
   );
   xhr.onreadystatechange = () => {
     if (xhr.readyState === 4 && xhr.status === 200) {
       const response = JSON.parse(xhr.responseText);
       const videoTitle = response.items[0].snippet.title;
       const videoDescription = response.items[0].snippet.description;

       console.log(response.items);
       console.log(videoDescription);
       titreVideo!.textContent = videoTitle;
       titreDescription!.textContent = videoDescription;
     }
   };
   xhr.send();
   
   // Appel des cartes des programmes
   this.progCard2 =
     {
       progCardImg: './assets/image/arch.webp',
       progCardTitle: 'Arche de Noé'
     }
   ;
   this.progCard1 = {
     progCardImg: './assets/image/jardin.webp',
     progCardTitle: 'Le Jardin d Eden'
   }
   ;

   this.progCard3 = {
     progCardImg: './assets/image/rct.webp',
     progCardTitle: 'Royaume des Cieux et de la Terre'
   }
   ;
   this.progCard4 = {
     progCardImg: './assets/image/b.webp',
     progCardTitle: 'Le Bâton de Moïse}',
   };
   this.progCard4 = {
     progCardImg: './assets/image/b.webp',
     progCardTitle: 'Le Bâton de Moïse',
   };
   this.progCard5 = {
    progCardImg: './assets/image/christ.webp',
    progCardTitle: 'Le Christ',
  };
  this.progCard6 = {
    progCardImg: './assets/image/sceau.webp',
    progCardTitle: 'Sceau des Prophetes',
  };
  this.progCard7 = {
    progCardImg: './assets/image/3m.webp',
    progCardTitle: 'Mashia Messie Mahdi',
  };
  this.progCard8 = {
    progCardImg: './assets/image/jourreligion.webp',
    progCardTitle: 'Jour de la Religion'
  };
  this.progCard9 = {
    progCardImg: './assets/image/jourdernier.webp',
    progCardTitle: 'Jour dernier'
  };
  this.progCard10 = {
    progCardImg: './assets/image/resurection.webp',
    progCardTitle: 'Resurection'
  };
  this.progCard11 = {
    progCardImg: './assets/image/paradis.webp',
    progCardTitle: 'Le Paradis'
  };
  
   }
   constructor(private router: ActivatedRoute){}










   getProg(id:number){
    this.detprog = this.router.snapshot.params["id"];
    if(id==1){
      this.id=1;
      this.nom="ODD-1"
      this.img="./assets/images/odd/odd1.webp"
    }
    if(id==2){
      this.id=2;
      this.nom="ODD-2";
      this.img="./assets/images/odd/odd2.webp";
    }
    if(id==3){
      this.id=3;
      this.nom="ODD-3";
      this.img="./assets/images/odd/odd3.webp";
    }
    if(id==4){
      this.id=4;
      this.nom="ODD-4";
      this.img="./assets/images/odd/odd4.webp";
    }
    if(id==5){
      this.id=5;
      this.nom="ODD-5";
      this.img="./assets/images/odd/odd5.webp";
    }
    if(id==6){
      this.id=6;
      this.nom="ODD-6";
      this.img="./assets/images/odd/odd6.webp";
    }
    if(id==7){
      this.id=7;
      this.nom="ODD-7";
      this.img="./assets/images/odd/odd7.webp";
    }
    if(id==8){
      this.id=8;
      this.nom="ODD-8";
      this.img="./assets/images/odd/odd8.webp";
    }
    if(id==9){
      this.id=9;
      this.nom="ODD-9";
      this.img="./assets/images/odd/odd9.webp";
    }
    if(id==10){
      this.id=10;
      this.nom="ODD-10";
      this.img="./assets/images/odd/odd10.webp";
    }
    if(id==11){
      this.id=11;
      this.nom="ODD-11";
      this.img="./assets/images/odd/odd11.webp"
    }
    if(id==12){
      this.id=12;
      this.nom="ODD-12";
      this.img="./assets/images/odd/odd12.webp";
    }
    if(id==13){
      this.id=13;
      this.nom="ODD-13";
      this.img="./assets/images/odd/odd13.webp";
    }
    if(id==14){
      this.id=14;
      this.nom="ODD-14";
      this.img="./assets/images/odd/odd14.webp";
    }
    if(id==15){
      this.id=15;
      this.nom="ODD-15";
      this.img="./assets/images/odd/odd15.webp";
    }
    if(id==16){
      this.id=16;
      this.nom="ODD-16";
      this.img="./assets/images/odd/odd16.webp";
    }
    if(id==17){
      this.id=17;
      this.nom="ODD-17";
      this.img="./assets/images/odd/odd17.webp";
    }
  }
 }

