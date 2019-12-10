import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ObtenerdataService } from '../services/obtenerdata.service';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.page.html',
  styleUrls: ['./adicionales.page.scss'],
})
export class AdicionalesPage implements OnInit {
  registros: any[] = [];
  errorMessage = '';

  constructor(private router: Router,public alertController: AlertController, private sendData: ObtenerdataService) { }  
  model: any = {};
  ngOnInit() {
    this.model = {
      motivo : null,
      masas:null,
      rellenos:null,
      cobertura:null,
      porciones : null
    };
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ADVERTENCIA',
      message: 'Por favor escoge el motivo del adicional para continuar.',
      buttons: ['OK']
    });

    await alert.present();
  }
  public enviarData( formulario: NgForm ) {
    if (formulario.valid) {
      this.sendData.obtenerData(this.model);
      this.router.navigateByUrl('reservas');
    } else {
      this.presentAlert();

    }
  }
}