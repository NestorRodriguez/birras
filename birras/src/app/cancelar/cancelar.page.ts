import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.page.html',
  styleUrls: ['./cancelar.page.scss'],
})
export class CancelarPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await  this.alertController.create({
      header: 'Tu reserva ha sido cancelada.',
      message: 'Puedes realizar una nueva reserva o presentar el comprobante de pago para consumo en el bar.',
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
            this.router.navigate(['/tipocomercio']);
            }
          }
      ]
    });

    await alert.present();
  }
}
