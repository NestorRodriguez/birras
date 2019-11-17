import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecoradoPage } from './decorado.page';

const routes: Routes = [
  {
    path: '',
    component: DecoradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecoradoPageRoutingModule {}
