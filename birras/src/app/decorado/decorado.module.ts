import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecoradoPageRoutingModule } from './decorado-routing.module';

import { DecoradoPage } from './decorado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecoradoPageRoutingModule
  ],
  declarations: [DecoradoPage]
})
export class DecoradoPageModule {}
