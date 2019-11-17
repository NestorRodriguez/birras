import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaCreditoPageRoutingModule } from './tarjeta-credito-routing.module';

import { TarjetaCreditoPage } from './tarjeta-credito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaCreditoPageRoutingModule
  ],
  declarations: [TarjetaCreditoPage]
})
export class TarjetaCreditoPageModule {}
