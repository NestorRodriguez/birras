import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {
  registros: any[] = [];
  errorMessage = '';

  constructor() {    }
  model: any = {};
  isenabled=false; 
  ngOnInit() {
    this.model = {
      nombre:null,
      apellido:null,
      cedula:null,
      direccion:null,      
      email : null,
      usuario:null,
      clave : null
    };
  }
  enviarData(formulario: NgForm){
    formulario.value.nombre
    formulario.value.apellido
    formulario.value.cedula
    formulario.value.direccion
    formulario.value.email
    formulario.value.usuario
    formulario.value.clave
    console.log(formulario);
  }
  
    }