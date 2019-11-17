import { Component } from '@angular/core';
import {  Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-bares',
  templateUrl: './registro-bares.page.html',
  styleUrls: ['./registro-bares.page.scss'],
})
export class RegistroBaresPage  {

  private todo:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.todo=this.formBuilder.group({
      nombre:['',Validators.required],
      direccion:['',Validators.required],
      nit:['',Validators.required],
      horarios:['',Validators.required],
      descripcion:['',Validators.required],
      mesas:['',Validators.required],
      fotos:['',Validators.required],
      email:['',Validators.required],
      usuario:['',Validators.required],
contraseña:['',Validators.required],
    })
  }
}
