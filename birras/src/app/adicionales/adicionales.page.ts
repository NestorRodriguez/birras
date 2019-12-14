import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ObtenerdataService } from '../services/obtenerdata.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.page.html',
  styleUrls: ['./adicionales.page.scss'],
})
export class AdicionalesPage implements OnInit {
  model: any;
  // tslint:disable-next-line: variable-name
  id_adicionales: number;
  birras: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

  public id: string;
  public motivo: string;
  public masas: string;
  public rellenos: string;
  public cobertura: string;
  public porciones: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private obtenerdata: ObtenerdataService, private navcontrol: NavController) { }

  ngOnInit() {
    this.getConsulta();
    this.model = {

      motivo: null,
      masas: null,
      rellenos: null,
      cobertura: null,
      porciones: null
    };

  }
  datosPer(form: NgForm) {
    console.log(this.model);
  }
  Aceptar() {
    this.birras.adicionales = this.id_adicionales;
    this.obtenerdata.SaveLocalStorageItem(
      'birras',
      JSON.stringify(this.birras)
    );
    this.router.navigateByUrl('/birras/adicionales');
  }
  testRadio() {
    console.log(this.id_adicionales);
  }

  getConsulta() {
    this.obtenerdata.getAdicionales().subscribe(response => {
          console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.obtenerdata.getBirrasAdicionales(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      motivo: this.motivo,
      masas: this.masas,
      rellenos: this.rellenos,
      cobertura: this.cobertura,
      porciones: this.porciones
    };
    console.log(data);
    this.obtenerdata.setAdicionales(data).subscribe(response => {
      console.log(response);
    });
  }

  deleteForm(id: string) {
    this.id = id;
    this.obtenerdata.deleteAdicionales(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }

  actualizarForm() {
    const data = {
      motivo: this.motivo,
      masas: this.masas,
      rellenos: this.rellenos,
      cobertura: this.cobertura,
      porciones: this.porciones
    };
    this.obtenerdata.putAdicionales(data).subscribe(response => {
      console.log(response);
    });
  }
}