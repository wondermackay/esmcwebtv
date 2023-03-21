import { Component, Input, OnInit } from '@angular/core';
import { CardVideo } from '../models/card-video.model';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss'],
})
export class CardVideoComponent implements OnInit {
  @Input() cardVideo!: CardVideo;

  ngOnInit() {}
}
