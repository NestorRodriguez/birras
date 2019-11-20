import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registro-bares',
  templateUrl: './registro-bares.page.html',
  styleUrls: ['./registro-bares.page.scss'],
})
export class RegistroBaresPage implements OnInit  {
  registros: any[] = [];
  errorMessage = '';

  constructor() {    }
  model: any = {};
  isenabled=false; 
  ngOnInit() {
    this.model = {
      nombre:null,      
      direccion:null,   
      nit:null,
      horarios:null,   
      descripcion:null,
      mesas:null,
      fotos:null,
      email : null,
      usuario:null,
      clave : null
    };
  }
  enviarData(formulario: NgForm){
    formulario.value.nombre 
    formulario.value.direccion
    formulario.value.nit
    formulario.value.horarios
    formulario.value.descripcion
    formulario.value.mesas
    formulario.value.fotos
    formulario.value.email
    formulario.value.usuario
    formulario.value.clave
    console.log(formulario);
  }
  
    }