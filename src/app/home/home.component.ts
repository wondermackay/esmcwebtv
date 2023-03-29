import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardVideo } from 'src/app/models/card-video.model';
import { ProgCard } from '../models/prog-card.model';
import { ProgrammeComponent } from '../programme/programme.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   // Declaration des Cards des PROGRAMMES
   progCard1!: ProgCard;
   progCard2!: ProgCard;
   progCard3!: ProgCard;
   progCard4!: ProgCard;

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
     this.progCard2 = {
       proCardImg: './assets/image/arch.jpg',
       proCardTitle: 'Arche de Noé'
     }

    this.progCard1 = {
      proCardImg:'./assets/image/jardin.jpg',
      proCardTitle:'Le Jardin d Eden'
    }


    this.progCard3 = {
      proCardImg:'./assets/image/messi.jpg',
      proCardTitle:'Le Messie'
    }

    this.progCard4 = {
      proCardImg:'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      proCardTitle:'Le Bâton de Moïse'
    }



    // Appel des cartes des Vidéos

    this.cardVideo1 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre1',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo2 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre2',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo3 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre3',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo4 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre4',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo5 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre5',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo6 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre6',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo7 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre7',
      '45:04',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );
    this.cardVideo8 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre8',
      '15:54',
      'ipsum dolor sit Lorem, ipsum dolor sit'
    );
  }

  constructor(private router: Router) { }

  redirigerVersP() {
    this.router.navigate(['/programme']);
  }

}



