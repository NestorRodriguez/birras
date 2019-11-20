import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'bares',
    loadChildren: () => import('./bares/bares.module').then( m => m.BaresPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
  {
    path: 'registro-bares',
    loadChildren: () => import('./registro-bares/registro-bares.module').then( m => m.RegistroBaresPageModule)
  },
  {
    path: 'registro-usuarios',
    loadChildren: () => import('./registro-usuarios/registro-usuarios.module').then( m => m.RegistroUsuariosPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'decorado',
    loadChildren: () => import('./decorado/decorado.module').then( m => m.DecoradoPageModule)
  },
  {
    path: 'adicionales',
    loadChildren: () => import('./adicionales/adicionales.module').then( m => m.AdicionalesPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
   {
    path: 'tarjeta-credito',
    loadChildren: () => import('./tarjeta-credito/tarjeta-credito.module').then( m => m.TarjetaCreditoPageModule)
  },
  {
    path: 'tarjeta-debito',
    loadChildren: () => import('./tarjeta-debito/tarjeta-debito.module').then( m => m.TarjetaDebitoPageModule)
  },
  {
    path: 'pse',
    loadChildren: () => import('./pse/pse.module').then( m => m.PsePageModule)
  },
  {
    path: 'cancelar',
    loadChildren: () => import('./cancelar/cancelar.module').then( m => m.CancelarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
