import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
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
  }
}
