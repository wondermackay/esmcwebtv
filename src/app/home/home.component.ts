import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardVideo} from 'src/app/models/card-video.model';
import {ProgCard} from '../models/prog-card.model';


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
      progCardImg: './assets/image/3m.webp',
      progCardTitle: 'Mashia Messie Mahdi'
    }
    ;
    this.progCard4 = {
      progCardImg: './assets/image/b.webp',
      progCardTitle: 'Le Bâton de Moïse}',
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
    constructor(private router: Router){}
  }



