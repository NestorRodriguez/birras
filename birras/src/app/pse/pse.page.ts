import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator, NgModel } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pse',
  templateUrl: './pse.page.html',
  styleUrls: ['./pse.page.scss'],
})
export class PsePage implements OnInit {
  total:any;
  registros: any[] = [];
  errorMessage = '';

  constructor(private alertController: AlertController, private router: Router) {    }
  model: any = {};
  isenabled=false; 
  ngOnInit() {
    this.total=70000+200000;
    this.model = {
      banco:null,   
      nombre:null,
      cedula : null
    };
  }
  enviarData(formulario: NgForm){
    formulario.value.banco
    formulario.value.nombre     
    formulario.value.cedula
    console.log(formulario);
  }
  async presentAlert() {
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
            this.router.navigate(['/tipocomercio']);
            }
          }
      ]
    });

    await alert.present();
  }
}

