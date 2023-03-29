import {Component, OnInit} from '@angular/core';
import axios,{AxiosResponse} from 'axios';
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
  styleUrls: ['./page-video.component.scss']
})
export class PageVideoComponent implements OnInit{
  ngOnInit() {
    const API_KEY = 'AIzaSyAuNzmHr2U2naJQJwm8LCyowx6PeEFNSTY';
    const PLAYLIST_ID = 'PLsoi2D5rHj1yALMuMV3lZaCMUTEj2Wy4n';

    fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${PLAYLIST_ID}&key=${API_KEY}`)
      .then((response: Response) => response.json())
      .then((data: any) => {
        console.log(data.items);
      })
      .catch((error: Error) => {
        console.error('Error:', error);
      });


    // axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${PLAYLIST_ID}&key=${API_KEY}`)
    //   .then((response: AxiosResponse) => {
    //     console.log(response.data);
    //     // Traiter la réponse de l'API
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //     // Gérer les erreurs de la requête
    //   });
  }
}
