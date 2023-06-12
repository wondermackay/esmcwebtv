import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users!: any[];
  inputName!: string;
  inputPwd!: string;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.users = [
      {
        nom: 'admin1',
        pwd: 'admin12',
      },
      {
        nom: 'admin2',
        pwd: 'admin21',
      },
    ];
  }

  getNom() {
    // var inputName: any = document.getElementById('nomm')!.ariaValueMax;
    // alert(inputName);
    if (
      (this.inputName === 'admin1' && this.inputPwd === 'admin12') ||
      (this.inputName === 'admin2' && this.inputPwd === 'admin21')
    ) {
      console.log('tchiiiiiiii');
      this.router.navigate(['/dash']);
    }
    console.log(this.inputName, this.inputPwd);
  }
}
