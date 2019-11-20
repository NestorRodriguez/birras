import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator, NgModel } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  registros: any[] = [];
  errorMessage = '';

  constructor() { }  
model: any = {};
  isenabled=false; 
  ngOnInit() {
    this.model = {
      personas:null, 
      nombre:null
    };
  }
  enviarData(formulario: NgForm){
    formulario.value.personas
    formulario.value.nombre    
    console.log(formulario);
  }
  
    }