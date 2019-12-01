import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ObtenerdataService } from '../services/obtenerdata.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.page.html',
  styleUrls: ['./tarjeta-credito.page.scss'],
})
export class TarjetaCreditoPage implements OnInit {
  total:any;
  registros: any[] = [];
  errorMessage = '';

  constructor(private router: Router,public alertController: AlertController, private sendData: ObtenerdataService) { }  
  model: any = {};
  isenabled=false; 
  ngOnInit() {
    //this.total=70000+200000;
    this.model = {
      banco:null,   
      nombre:null,
      cedula : null,
      cuotas:null
    };
  }
  
  
  async reserva() {
    const alert = await  this.alertController.create({
      header: 'Tu reserva ha sido creada.',
      message: 'Si deseas cancelar la reserva debe ser con 3 dias de anterioridad.',
       buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
           {
            text: 'Ok',
            handler: () => {
            console.log('Confirm Ok');
            this.router.navigate(['/novedades']);
            }
          }
      ]
    });

    await alert.present();
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
      this.reserva();
    } else {
      this.presentAlert();

    }
  }
}


