import { Component, OnInit } from '@angular/core';
import { CardEmission } from 'src/app/modeles/card_emission.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardEmission!: CardEmission[];
  constructor() {}

  ngOnInit(): void {
    this.cardEmission = [
      {
        id: 1,
        title: "Le Jardin d'Eden",
        img: './assets/image/jardin.webp',
      },
      {
        id: 2,
        title: 'Arche De Noé',
        img: './assets/image/arch.webp',
      },
      {
        id: 3,
        title: 'Royaume des Cieux et de la Terre',
        img: './assets/image/rct.webp',
      },
      {
        id: 4,
        title: 'Le Bâton de Moïse',
        img: './assets/image/b.webp',
      },
      {
        id: 5,
        title: 'Le Christ',
        img: './assets/image/christ.webp',
      },
      {
        id: 6,
        title: 'Sceau des Prophetes',
        img: './assets/image/sceau.webp',
      },
      {
        id: 7,
        title: 'Mashia Messie Mahdi',
        img: './assets/image/3m.webp',
      },
      {
        id: 8,
        title: 'Jour de la Religion',
        img: './assets/image/jourreligion.webp',
      },
      {
        id: 9,
        title: 'Jour dernier',
        img: './assets/image/jourdernier.webp',
      },
      {
        id: 10,
        title: 'Resurection',
        img: './assets/image/resurection.webp',
      },
      {
        id: 11,
        title: 'Paradis',
        img: './assets/image/paradis.webp',
      },

      // Ajouter des Emissions ici
    ];
  }
  scrolToTop(): void {
    window.scrollTo(0, 0);
  }
}
