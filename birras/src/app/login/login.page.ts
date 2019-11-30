import { Component, OnInit } from '@angular/core';
//import { ObtenerdataService } from '../backend/services/obtenerdata.service';
//'../../backend/services/obtenerdata.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ObtenerdataService } from '../backend/services/obtenerdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit{
  registros: any[] = [];
  errorMessage = '';

  constructor(private router: Router,public alertController: AlertController, private sendData: ObtenerdataService) { }  
  model: any = {};
  ngOnInit() {
    this.model = {
      email : null,
      clave : null
    };
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Por favor diligencie todos los campos para continuar',
      buttons: ['OK']
    });

    await alert.present();
  }
  public enviarData( formulario: NgForm ) {
    if (formulario.valid) {
      this.sendData.obtenerData(this.model);
      this.router.navigateByUrl('novedades');
    } else {
      this.presentAlert();

    }
  }
}