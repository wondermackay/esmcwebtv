import { Component } from '@angular/core';

@Component({
  selector: 'app-mise-en-examen',
  templateUrl: './mise-en-examen.component.html',
  styleUrls: ['./mise-en-examen.component.scss']
})
export class MiseEnExamenComponent {
step:number=1;
cont:number=1;
ngOnInit(): void {
console.log(this.step)
}
etapeSuivante(){
  this.step=this.step+1;
  this.cont=1;
  console.log(this.step)

}
etapeListe(){
  this.step=this.step+1;
  this.cont=2;
  console.log(this.step)

}

}
