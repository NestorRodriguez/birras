import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ObtenerdataService } from '../services/obtenerdata.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  model: any;
  // tslint:disable-next-line: variable-name
  id_reserva: number;
  birras: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

  public id: string;
  public personas: string;
  public motivo: string;
  public ingreso: string;
  public salida: string;
  public dedicatoria: string;
  public festejado: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private obtenerdata: ObtenerdataService, private navcontrol: NavController) { }

  ngOnInit() {
    this.getConsulta();
    this.model = {
      personas: null,
      motivo: null,
      ingreso: null,
      salida: null,
      dedicatoria: null,
      festejado: null
    };

  }
  datosPer(form: NgForm) {
    console.log(this.model);
  }
  Aceptar() {
    this.birras.reserva = this.id_reserva;
    this.obtenerdata.SaveLocalStorageItem(
      'birras',
      JSON.stringify(this.birras)
    );
    this.router.navigateByUrl('/birras/reservas');
  }
  testRadio() {
    console.log(this.id_reserva);
  }

  getConsulta() {
    this.obtenerdata.getReserva().subscribe(response => {
     
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.obtenerdata.getBirrasReserva(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      personas: this.personas,
      motivo: this.motivo,
      ingreso: this.ingreso,
      salida: this.salida,
      dedicatoria: this.dedicatoria,
      festejado: this.festejado
    };
    console.log(data);
    this.obtenerdata.setReserva(data).subscribe(response => {
      console.log(response);
    });
  }

  deleteForm(id: string) {
    this.id = id;
    this.obtenerdata.deleteReserva(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }

  actualizarForm() {
    const data = {
      personas: this.personas,
      motivo: this.motivo,
      ingreso: this.ingreso,
      salida: this.salida,
      dedicatoria: this.dedicatoria,
      festejado: this.festejado
    };
    this.obtenerdata.putReserva(data).subscribe(response => {
      console.log(response);
    });
  }
}