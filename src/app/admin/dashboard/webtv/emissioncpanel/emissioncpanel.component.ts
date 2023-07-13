import { Component } from '@angular/core';

@Component({
  selector: 'app-emissioncpanel',
  templateUrl: './emissioncpanel.component.html',
  styleUrls: ['./emissioncpanel.component.scss']
})
export class EmissioncpanelComponent {
  step:number=0;
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
