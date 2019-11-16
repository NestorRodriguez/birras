import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroBaresPageRoutingModule } from './registro-bares-routing.module';

import { RegistroBaresPage } from './registro-bares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroBaresPageRoutingModule
  ],
  declarations: [RegistroBaresPage]
})
export class RegistroBaresPageModule {}
