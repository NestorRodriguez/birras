import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit{
  registros: any[] = [];
  errorMessage = '';

  constructor() {    }
  model: any = {};
  isenabled=false; 
  ngOnInit() {
    this.model = {
      email : null,
      clave : null
    };
  }
  enviarData(formulario: NgForm){
    formulario.value.email
    formulario.value.clave
    console.log(formulario);
  }
  
    }