import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  language = 'Fr';
  video_ids: any[] | undefined;
  episodes: any = [];
  title!: string | null;
  videoLink: any
  id!: number;
  idProg!: number;
  showVideoPlayer = true;
  showYoutubePlayer = false;
  videoId = 'Q2tNZAjWXec';
  displayLive = true;
  iframeSrc!: SafeResourceUrl ;

  constructor(private route: ActivatedRoute, private  sanitizer: DomSanitizer) {}
  liveUrl:string = 'https://player.viloud.tv/embed/channel/3f5ac893edbf03549d94062c80340a4a'
  ngOnInit() {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.liveUrl)
    window.scrollTo(0, 0);
    // this.title = this.route.snapshot.paramMap.get('title');
    let id = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id')!);
      console.log('bah ', id);
      if (id == 1) {
        this.episodes = [(this.idProg = 1), (this.title = "Le Jardin d'Eden")];
      }
      if (id == 2) {
        this.episodes = [(this.idProg = 2), (this.title = 'Arche de Noé')];
      }
      if (id == 3) {
        this.episodes = [
          (this.idProg = 3),
          (this.title = 'Royaume des Cieux et de la Terre'),
        ];
      }
      if (id == 4) {
        this.episodes = [(this.idProg = 4), (this.title = 'Le Bâton de Moïse')];
      }
      if (id == 5) {
        this.episodes = [(this.idProg = 5), (this.title = 'Le Christ')];
      }
      if (id == 6) {
        this.episodes = [
          (this.idProg = 6),
          (this.title = 'Sceau des Prophetes'),
        ];
      }
      if (id == 7) {
        this.episodes = [
          (this.idProg = 7),
          (this.title = 'Mashia Messie Mahdi'),
        ];
      }
      if (id == 8) {
        this.episodes = [
          (this.idProg = 8),
          (this.title = 'Jour de la Religion'),
        ];
      }
      if (id == 9) {
        this.episodes = [(this.idProg = 9), (this.title = 'Jour dernier')];
      }
      if (id == 10) {
        this.episodes = [(this.idProg = 10), (this.title = 'Resurrection')];
      }
      if (id == 11) {
        this.episodes = [(this.idProg = 11), (this.title = 'Le Paradis')];
      }
    });
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
      // console.log(videoIds);
      this.video_ids = videoIds;
      console.log(this.video_ids);
    });
  }
  changeVideo(id: string) {
    // this.videoId = id;
    // this.showVideoPlayer = false;
    // this.showYoutubePlayer = false;
    // setTimeout(() => {
    //   this.showYoutubePlayer = true; // Afficher le composant youtube-player à nouveau après 500ms
    // }, 500);
    // console.log(id);
    this.liveUrl = 'https://www.youtube.com/embed/'+id;
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.liveUrl);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });


  }

  playEpisode1() {
    this.videoId = 'Q2tNZAjWXec';
    this.displayLive = false;

    this.showYoutubePlayer = false;
    setTimeout(() => {
      this.showYoutubePlayer = true; // Afficher le composant youtube-player à nouveau après 500ms
    }, 500);
  }

  playEpisode2() {
    this.videoId = 'F_0r1QDkUBs';
    this.displayLive = false;

    this.showYoutubePlayer = false;
    setTimeout(() => {
      this.showYoutubePlayer = true; // Afficher le composant youtube-player à nouveau après 500ms
    }, 500);
  }

  playEpisode3() {
    this.videoId = 'Z4TIxBiAkp8';
    this.displayLive = false;
    this.showYoutubePlayer = false;
    setTimeout(() => {
      this.showYoutubePlayer = true; // Afficher le composant youtube-player à nouveau après 500ms
    }, 500);
  }

  playEpisode4() {
    this.videoId = 'KVZvuOGkeNs';
    this.displayLive = false;
    this.showYoutubePlayer = false;
    setTimeout(() => {
      this.showYoutubePlayer = true; // Afficher le composant youtube-player à nouveau après 500ms
    }, 500);
  }
  videoFr() {
    this.language = 'Fr';
  }
  videoKo() {
    this.language = 'Ko';
  }
  videoKa() {
    this.language = 'Ka';
  }
  videoEw() {
    this.language = 'Ew';
  }
}
