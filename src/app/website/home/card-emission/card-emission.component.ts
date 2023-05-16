import { Component, Input, OnInit } from '@angular/core';
import { CardEmission } from '../../../modeles/card_emission.model';

@Component({
  selector: 'app-card-emission',
  templateUrl: './card-emission.component.html',
  styleUrls: ['./card-emission.component.scss'],
})
export class CardEmissionComponent implements OnInit {
  @Input() cardEmission!: CardEmission;

  constructor() {}

  ngOnInit(): void {}
}
export { CardEmission };
