import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ObtenerdataService } from '../services/obtenerdata.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  registros: any[] = [];
  errorMessage = '';

  constructor(private router: Router,public alertController: AlertController, private sendData: ObtenerdataService) { }  
model: any = {};
  ngOnInit() {
    this.model = {
      personas:null, 
      nombre:null,
      motivo:null
    };
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ADVERTENCIA',
      message: 'Por favor diligencia todos los campos para continuar',
      buttons: ['OK']
    });

    await alert.present();
  }
  public enviarData( formulario: NgForm ) {
    if (formulario.valid) {
      this.sendData.obtenerData(this.model);
      this.router.navigateByUrl('pago');
    } else {
      this.presentAlert();

    }
  }
}