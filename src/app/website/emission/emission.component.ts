import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emission',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.scss'],
})
export class EmissionComponent implements OnInit {
  programmes: any[] = [
    {
      id:1,
      title: "Le Jardin d'Eden",
      thumbnail:'./assets/image/jardin.png',
    },
    {
      id:2,
      title: 'Arche de Noé',
      thumbnail: './assets/image/arch.png',
    },
    {
      id:3,
      title: 'Royaume des Cieux et de la Terre',
      thumbnail: './assets/image/r.png',
    },
    {
      id:4,
      title: 'Le Bâton de Moïse',
      thumbnail: './assets/image/baton.png',
    },
    {
      id:5,
      title: 'Le Christ',
      thumbnail: './assets/image/christ.png',
    },
    {
      id:6,
      title: 'Sceau des Prophetes',
      thumbnail: './assets/image/sceau.png',
    },
    {
      id:7,
      title: 'Mashia Messie Mahdi',
      thumbnail: './assets/image/3m.png',
    },
    {
      id:8,
      title: 'Jour de la Religion',
      thumbnail: './assets/image/jourreligion.png',
    },
    {
      id:9,
      title: 'Jour dernier',
      thumbnail: './assets/image/jourdernier2.jpg',
    },
    {
      id:10,
      title: 'Resurection',
      thumbnail: './assets/image/resurrection.png',
    },
    {
      id:11,
      thumbnail: '../../assets/image/paradis.png',
      title: 'Le Paradis',
    },

    // Ajoutez d'autres Émissions ici...
  ];

  ngOnInit(): void {}
}
