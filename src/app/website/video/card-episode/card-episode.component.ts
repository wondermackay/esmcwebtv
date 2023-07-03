import { Component, Input, OnInit } from '@angular/core';
import { CardEpisode } from 'src/app/modeles/card_episode.model';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss'],
})
export class CardEpisodeComponent implements OnInit {
  @Input() cardEpisode!: CardEpisode;
  episodeNum!: Number;
  ngOnInit(): void {
    this.episodeNum = 1
  }


}
export { CardEpisode };
