import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
  styleUrls: ['./page-video.component.scss']
})
export class PageVideoComponent implements OnInit {

  title!: string | null;

  constructor(private route: ActivatedRoute) {}
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
}
