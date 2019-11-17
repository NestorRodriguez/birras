import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaDebitoPage } from './tarjeta-debito.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaDebitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaDebitoPageRoutingModule {}
