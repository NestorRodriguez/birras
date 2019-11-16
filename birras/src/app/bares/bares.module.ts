import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaresPageRoutingModule } from './bares-routing.module';

import { BaresPage } from './bares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaresPageRoutingModule
  ],
  declarations: [BaresPage]
})
export class BaresPageModule {}
