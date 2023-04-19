import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { programmeModel } from '../models/programme.model';
import ProgrammeJson from '../programme.json';
@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
  styleUrls: ['./page-video.component.scss'],
})
export class PageVideoComponent implements OnInit {
  title!: string | null;
  detprog: any;
  id: number = 0;
  nom: String = '';
  photo: String = '';

  prog: programmeModel[] = ProgrammeJson;
  step: number = 0;
  loading: number = 1;
  detOdd: any;
video!:any
  tepisode!: any;
  cibleDataValue: any;
  tc: any;
  oddId = 0;
  data: any;
  params: any;
 //videos: url =(https:player.viloud.tv/embed/channel/24f702c58ea642853ed4282d5c0cce45?autoplay=1&volume=1&controls=1&title=1&share=1&open_playlist=0&random=0)
  

  constructor(private route: ActivatedRoute, private router: ActivatedRoute) {}
  ngOnInit() {
    this.params = this.router.snapshot.params;
    console.log('param', this.params);
    this.id = this.router.snapshot.params['title'];
    console.log('reine', this.id);

    this.getDetailsProgramme(this.id);
    // this.title = this.route.snapshot.paramMap.get('title');
    const api_key = 'AIzaSyAuNzmHr2U2naJQJwm8LCyowx6PeEFNSTY';
    const playlist_id = 'PLsoi2D5rHj1yALMuMV3lZaCMUTEj2Wy4n';

    // Définition de la fonction asynchrone pour récupérer les IDs de toutes les vidéos de la playlist
    async function getVideoIds(): Promise<string[]> {
      let videoIds: string[] = [];
      let nextPageToken = '';

      // Tant qu'il y a une page suivante, continuer à appeler l'API YouTube Data
      while (nextPageToken !== undefined) {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlist_id}&key=${api_key}&pageToken=${nextPageToken}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log("okiiii",result)

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
      this.video=videoIds
      console.log("videoIds",this.video);
    });
  }

  getDetailsProgramme(id: number) {
    this.detprog = this.router.snapshot.params['title'];
    if (id == 1) {
      this.id = 1;
      this.nom = this.prog[0].libelle;
      this.photo="url(https:player.viloud.tv/embed/channel/24f702c58ea642853ed4282d5c0cce45?autoplay=1&volume=1&controls=1&title=1&share=1&open_playlist=0&random=0)"
      this.tepisode = this.prog[0].child;
    }
    if (id == 2) {
      this.id = 2;
      this.nom = this.prog[1].libelle;
      this.photo = './assets/images/odd/odd2.webp';
      this.tepisode = this.prog[1].child;
    }
    if (id == 3) {
      this.id = 3;
      this.nom = this.prog[2].libelle;
      this.photo = './assets/images/odd/odd3.webp';
      this.tepisode = this.prog[2].child;
    }

    if (id == 4) {
      this.id = 4;
      this.nom = this.prog[3].libelle;
      this.photo = './assets/images/odd/odd4.webp';
      this.tepisode = this.prog[3].child;
    }
    if (id == 5) {
      this.id = 5;
      this.nom = this.prog[4].libelle;
      this.photo = './assets/images/odd/odd5.webp';
      this.tepisode = this.prog[4].child;
    }
    if (id == 6) {
      this.id = 6;
      this.nom = this.prog[5].libelle;
      this.photo = './assets/images/odd/odd6.webp';
      this.tepisode = this.prog[5].child;
    }
    if (id == 7) {
      this.id = 7;
      this.nom = this.prog[6].libelle;
      this.photo = './assets/images/odd/odd7.webp';
      this.tepisode = this.prog[6].child;
    }
    if (id == 8) {
      this.id = 8;
      this.nom = this.prog[7].libelle;
      this.photo = './assets/images/odd/odd8.webp';
      this.tepisode = this.prog[7].child;
    }
    if (id == 9) {
      this.id = 9;
      this.nom = this.prog[8].libelle;
      this.photo = './assets/images/odd/odd9.webp';
      this.tepisode = this.prog[8].child;
    }
    if (id == 10) {
      this.id = 10;
      this.nom = this.prog[9].libelle;
      this.photo = './assets/images/odd/odd10.webp';
      this.tepisode = this.prog[9].child;
    }
    if (id == 11) {
      this.id = 11;
      this.nom = this.prog[10].libelle;
      this.photo = './assets/images/odd/odd11.webp';
      this.tepisode = this.prog[10].child;
    }

    console.log('ffeeeeeee', this.tepisode);
    console.log('nom', this.nom);
    // console.log("nom",this.nom)
  }
}
