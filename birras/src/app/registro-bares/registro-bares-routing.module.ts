import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroBaresPage } from './registro-bares.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroBaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroBaresPageRoutingModule {}
