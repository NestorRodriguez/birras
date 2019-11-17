import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaDebitoPageRoutingModule } from './tarjeta-debito-routing.module';

import { TarjetaDebitoPage } from './tarjeta-debito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaDebitoPageRoutingModule
  ],
  declarations: [TarjetaDebitoPage]
})
export class TarjetaDebitoPageModule {}
