import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ObtenerdataService } from '../services/obtenerdata.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-decorado',
  templateUrl: './decorado.page.html',
  styleUrls: ['./decorado.page.scss'],
})
export class DecoradoPage implements OnInit {
  model: any;
  // tslint:disable-next-line: variable-name
  id_decorado: number;
  birras: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

  public id: string;
  public motivo: string;
  public precios: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private obtenerdata: ObtenerdataService, private navcontrol: NavController) { }

  ngOnInit() {
    this.getConsulta();
    this.model = {
      
  motivo:  null,
 precios:  null
    };

  }
  datosPer(form: NgForm) {
    console.log(this.model);
  }
  Aceptar() {
    this.birras.decorado = this.id_decorado;
    this.obtenerdata.SaveLocalStorageItem(
      'birras',
      JSON.stringify(this.birras)
    );
    this.router.navigateByUrl('/birras/decorado');
  }
  testRadio() {
    console.log(this.id_decorado);
  }

  getConsulta() {
    this.obtenerdata.getDecorado().subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.obtenerdata.getBirrasDecorado(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      motivo:  this.motivo,
      precios:  this.precios
    };
    console.log(data);
    this.obtenerdata.setDecorado(data).subscribe(response => {
      console.log(response);
    });
  }

  deleteForm(id: string) {
    this.id = id;
    this.obtenerdata.deleteDecorado(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }

  actualizarForm() {
    const data = {
      motivo:  this.motivo,
      precios:  this.precios
    };
    this.obtenerdata.putDecorado(data).subscribe(response => {
      console.log(response);
    });
  }
}