import { Component, Input, OnInit } from '@angular/core';
import { ProgCard } from '../models/prog-card.model';

@Component({
  selector: 'app-prog-card',
  templateUrl: './prog-card.component.html',
  styleUrls: ['./prog-card.component.scss'],
})
export class ProgCardComponent implements OnInit {
  @Input() progCard!: ProgCard;

  ngOnInit() {}
}
