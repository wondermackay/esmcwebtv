import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
  styleUrls: ['./page-video.component.scss']
})
export class PageVideoComponent implements OnInit {

  title!: string | null;
  detprog: any;
  id:number=0;
  nom:String="";
  photo:String="";
  tepisode = [
    {
      idp: 1,
      idepisode: 1,
      img: "./assets/image/resurection.webp",
      // nomepisode:""
    },
  ];
  //  tprog = [
//   {
//     id: 1,
//     title:'Arche de Noé',
//     img: "./assets/image/arch.webp",
//   },
//   {
//     id: 2,
//     title:'Le Jardin d Eden',
//     img: "./assets/image/jardin.webp",
//   },
//   {
//     id: 3,
//     title:'Resurection',
//     img: "./assets/image/resurection.webp",
//   },
//   {
//     id: 4,
//     title:'Le Bâton de Moïse',
//     img: "./assets/image/b.webp",
//   },
//   {
//     id: 5,
//     title:'Le Bâton de Moïse',
//     img: "./assets/image/b.webp",
//   },
//   {
//     id: 6,
//     title:'Resurection',
//     img: "./assets/image/resurection.webp",
//   },
//   {
//     id: 7,
//     title:'Sceau des Prophetes',
//     img: "./assets/image/sceau.webp",
//   },
//   {
//     id: 8,
//     title:'Mashia Messie Mahdi',
//     img: "./assets/image/3m.webp",
//   },
//   {
//     id: 9,
//     title:'Jour de la Religion',
//     img: "./assets/image/jourreligion.webp",
//   },
//   {
//     id: 10,
//     title:'Jour dernier',
//     img: "./assets/image/jourdernier.webp",
//   },
//   {
//     id: 11,
//     title:'Resurection',
//     img: "./assets/image/resurection.webp",
//   },
//   {
//     id: 12,
//     title:'Resurection',
//     img: "./assets/image/resurection.webp",
//   },
 
// ];

  constructor(private route: ActivatedRoute,private router: ActivatedRoute) {}
  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    const api_key = "AIzaSyAuNzmHr2U2naJQJwm8LCyowx6PeEFNSTY";
    const playlist_id = "PLsoi2D5rHj1yALMuMV3lZaCMUTEj2Wy4n";

// Définition de la fonction asynchrone pour récupérer les IDs de toutes les vidéos de la playlist
    async function getVideoIds(): Promise<string[]> {
      let videoIds: string[] = [];
      let nextPageToken = "";

      // Tant qu'il y a une page suivante, continuer à appeler l'API YouTube Data
      while (nextPageToken !== undefined) {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlist_id}&key=${api_key}&pageToken=${nextPageToken}`;
        const response = await fetch(url);
        const result = await response.json();

        for (const item of result.items) {
          const videoId = item.snippet.resourceId.videoId;
          videoIds.push(videoId);
        }

        nextPageToken = result.nextPageToken;
      }

      return videoIds;
    }

// Appel de la fonction pour récupérer les IDs de toutes les vidéos de la playlist
    getVideoIds().then((videoIds) => {
      console.log(videoIds);
    });
  }

getDetailsProgramme(id:number){
  this.detprog = this.router.snapshot.params["id"];
  if (id == 1) {
    this.id = 1;
    this.nom = "Arche de Noé";
    this.photo = "./assets/images/odd/odd1.webp";
    this.tepisode = [
      {
        idp: 1,
        idepisode: 11,
        img: "./assets/image/resurection.webp",
      },
      {
        idp: 2,
        idepisode: 12,
        img: "./assets/image/resurection.webp",
      },
      {
        idp: 3,
        idepisode: 13,
        img: "./assets/image/resurection.webp",
      },
      
    ];
  }
  if (id == 2) {
    this.id = 2;
    this.nom = "Le Jardin d Eden";
    this.photo = "./assets/images/odd/odd2.webp";
    this.tepisode = [
      {
        idp: 1,
        idepisode: 21,
        img: "./assets/image/resurection.webp",
      },
      {
        idp: 2,
        idepisode: 22,
        img: "./assets/image/resurection.webp",
      },
      {
        idp: 3,
        idepisode: 23,
        img: "./assets/image/resurection.webp",
      },
     
    ];
  }
  if (id == 3) {
    this.id = 3;
    this.nom = "Resurection";
    this.photo = "./assets/images/odd/odd3.webp";

    this.tepisode = [
      { idp: 1, idepisode: 31,
      img: "./assets/image/resurection.webp", },
      { idp: 2, idepisode: 32,
      img: "./assets/image/resurection.webp", },
      { idp: 3, idepisode: 33,
      img: "./assets/image/resurection.webp", },
      
     
    ];
  }

  // 
  // if (id == 4) {
  //   this.id = 4;
  //   this.nom = "Le Bâton de Moïse";
  //   this.photo = "./assets/images/odd/odd4.webp";

  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 41,
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 42,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 43,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 44,
  //     },
  //     {
  //       idp: 5,
  //       idepisode: 45,
  //     },
  //     {
  //       idp: 6,
  //       idepisode: 46,
  //     },
    
  //   ];
  // }
  // if (id == 5) {
  //   this.id = 5;
  //   this.nom = "Resurection";
  //   this.photo = "./assets/images/odd/odd5.webp";

  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 51,
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 52,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 53,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 54,
  //     },
    
  //   ];
  // }
  // if (id == 6) {
  //   this.id = 6;
  //   this.nom = "Sceau des Prophetes";
  //   this.photo = "./assets/images/odd/odd6.webp";
  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 61,
        
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 62,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 63,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 64,
  //     },
  //     {
  //       idp: 5,
  //       idepisode: 65,
  //     },
  //     {
  //       idp: 6,
  //       idepisode: 66,
  //     },
  //     {
  //       idp: 7,
  //       idepisode: 67,
  //     },
  //     {
  //       idp: 8,
  //       idepisode: 68,
  //     },
  //   ];
  // }
  // if (id == 7) {
  //   this.id = 7;
  //   this.nom = "ODD-7";
  //   this.photo = "./assets/images/odd/odd7.webp";
  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 71,
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 72,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 73,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 74,
  //     },
  //     {
  //       idp: 5,
  //       idepisode: 75,
  //     },
  //   ];
  // }
  // if (id == 8) {
  //   this.id = 8;
  //   this.nom = "ODD-8";
  //   this.photo = "./assets/images/odd/odd8.webp";
  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 81,
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 82,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 83,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 84,
  //     },
  //     {
  //       idp: 5,
  //       idepisode: 85,
  //     },
  //     {
  //       idp: 6,
  //       idepisode: 86,
  //     },
  //     {
  //       idp: 7,
  //       idepisode: 87,
  //     },
  //     {
  //       idp: 8,
  //       idepisode: 88,
  //     },
  //     {
  //       idp: 9,
  //       idepisode: 89,
  //     },
  //     {
  //       idp: 10,
  //       idepisode: 810,
  //     },
  //     {
  //       idp: 11,
  //       idepisode: 811,
  //     },
  //     {
  //       idp: 12,
  //       idepisode: 812,
  //     },
  //   ];
  // }
  // if (id == 9) {
  //   this.id = 9;
  //   this.nom = "ODD-9";
  //   this.photo = "./assets/images/odd/odd9.webp";
  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 91,
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 92,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 93,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 94,
  //     },
  //     {
  //       idp: 5,
  //       idepisode: 95,
  //     },
  //     {
  //       idp: 6,
  //       idepisode: 96,
  //     },
  //     {
  //       idp: 7,
  //       idepisode: 97,
  //     },
  //     {
  //       idp: 8,
  //       idepisode: 98,
  //     },
  //   ];
  // }
  // if (id == 10) {
  //   this.id = 10;
  //   this.nom = "ODD-10";
  //   this.photo = "./assets/images/odd/odd10.webp";
  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 101,
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 102,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 103,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 104,
  //     },
  //     {
  //       idp: 5,
  //       idepisode: 105,
  //     },
  //     {
  //       idp: 6,
  //       idepisode: 106,
  //     },
  //     {
  //       idp: 7,
  //       idepisode: 107,
  //     },
  //     {
  //       idp: 8,
  //       idepisode: 108,
  //     },
  //     {
  //       idp: 9,
  //       idepisode: 109,
  //     },
  //     {
  //       idp: 10,
  //       idepisode: 1010,
  //     },
  //   ];
  // }
  // if (id == 11) {
  //   this.id = 11;
  //   this.nom = "ODD-11";
  //   this.photo = "./assets/images/odd/odd11.webp";
  //   this.tepisode = [
  //     {
  //       idp: 1,
  //       idepisode: 111,
  //     },
  //     {
  //       idp: 2,
  //       idepisode: 112,
  //     },
  //     {
  //       idp: 3,
  //       idepisode: 113,
  //     },
  //     {
  //       idp: 4,
  //       idepisode: 114,
  //     },
  //     {
  //       idp: 5,
  //       idepisode: 115,
  //     },
  //     {
  //       idp: 6,
  //       idepisode: 116,
  //     },
  //     {
  //       idp: 7,
  //       idepisode: 117,
  //     },
  //     {
  //       idp: 8,
  //       idepisode: 118,
  //     },
  //     {
  //       idp: 9,
  //       idepisode: 119,
  //     },
  //     {
  //       idp: 10,
  //       idepisode: 1110,
  //     },
  //   ];
  // }
 
}



}
