import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetaCreditoPage } from './tarjeta-credito.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaCreditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaCreditoPageRoutingModule {}
