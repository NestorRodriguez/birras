import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {
  user: User = new User();

  constructor(private router: Router, private authSvc: AuthService) { }  
  
  ngOnInit() {
    
  }

  async onRegister () {
    const user = await this.authSvc.onRegister(this.user);

    if(user){
      console.log('logeado');
      this.router.navigateByUrl('/')
    }
  }
  
}