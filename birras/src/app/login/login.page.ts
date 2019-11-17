import { Component} from '@angular/core';
import {  Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
private todo:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.todo=this.formBuilder.group({
usuario:['',Validators.required],
contraseña:['',Validators.required],
    })
  }
}
