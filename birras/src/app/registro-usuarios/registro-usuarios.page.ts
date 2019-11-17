import { Component} from '@angular/core';
import {  Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage  {

  private todo:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.todo=this.formBuilder.group({
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      cedula:['',Validators.required],
      direccion:['',Validators.required],
      email:['',Validators.required],
      usuario:['',Validators.required],
contraseña:['',Validators.required],
    })
  }
}

