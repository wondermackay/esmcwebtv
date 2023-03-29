import {Component, OnInit} from '@angular/core';
import {ProgCard} from "../models/prog-card.model";

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {
  proCard!: ProgCard[];

  ngOnInit() {
    this.proCard = [
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      },
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      },
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      },
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      },
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      },
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      },
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      },
      {
        proCardImg: "./assets/image/arch.jpg",
        proCardTitle: 'Arche de Noé'
      }
    ]
  }
}
