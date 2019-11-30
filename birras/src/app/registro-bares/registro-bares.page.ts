import { Component, OnInit } from '@angular/core';
import { ObtenerdataService } from '../backend/services/obtenerdata.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-bares',
  templateUrl: './registro-bares.page.html',
  styleUrls: ['./registro-bares.page.scss'],
})
export class RegistroBaresPage implements OnInit  {
  registros: any[] = [];
  errorMessage = '';

  constructor(private router: Router,public alertController: AlertController, private sendData: ObtenerdataService) { }  
  model: any = {};
  ngOnInit() {
    this.model = {
      nombre:null,      
      direccion:null,   
      nit:null,
      horarios:null,   
      descripcion:null,
      mesas:null,
      fotos:null,
      email : null,
      usuario:null,
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
      this.router.navigateByUrl('login');
    } else {
      this.presentAlert();

    }
  }
}