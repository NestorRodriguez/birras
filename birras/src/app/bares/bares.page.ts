import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ObtenerdataService } from '../services/obtenerdata.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-bares',
  templateUrl: './bares.page.html',
  styleUrls: ['./bares.page.scss'],
})
export class BaresPage implements OnInit {
  model: any;
  // tslint:disable-next-line: variable-name
  id_bares: number;
  birras: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

  public id: string;
  public mesas: string;
  public bar: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private obtenerdata: ObtenerdataService, private navcontrol: NavController) { }

  ngOnInit() {
    this.getConsulta();
    this.model = {
      
  mesas:  null,
 bar:  null
    };

  }
  datosPer(form: NgForm) {
    console.log(this.model);
  }
  Aceptar() {
    this.birras.bares = this.id_bares;
    this.obtenerdata.SaveLocalStorageItem(
      'birras',
      JSON.stringify(this.birras)
    );
    this.router.navigateByUrl('/birras/bares');
  }
  testRadio() {
    console.log(this.id_bares);
  }

  getConsulta() {
    this.obtenerdata.getBares().subscribe(response => {
      
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.obtenerdata.getBirrasBares(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      mesas:  this.mesas,
      bar:  this.bar
    };
    console.log(data);
    this.obtenerdata.setBares(data).subscribe(response => {
      console.log(response);
    });
  }

  deleteForm(id: string) {
    this.id = id;
    this.obtenerdata.deleteBares(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }

  actualizarForm() {
    const data = {
      mesas:  this.mesas,
      bar:  this.bar
    };
    this.obtenerdata.putBares(data).subscribe(response => {
      console.log(response);
    });
  }
}