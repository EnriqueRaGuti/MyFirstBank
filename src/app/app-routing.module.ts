import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'detallecuenta/:numero',
    loadChildren: () => import('./Pages/detallecuenta/detallecuenta.module').then( m => m.DetallecuentaPageModule)
  },
  {
    path: 'editarcuenta/:numero',
    loadChildren: () => import('./Pages/editarcuenta/editarcuenta.module').then( m => m.EditarcuentaPageModule)
  },
  {
    path: 'inscribirtercero',
    loadChildren: () => import('./Pages/inscribirtercero/inscribirtercero.module').then( m => m.InscribirterceroPageModule)
  },
  {
    path: 'transferencias/:numero',
    loadChildren: () => import('./Pages/transferencias/transferencias.module').then( m => m.TransferenciasPageModule)
  },
  {
    path: 'transmicuenta',
    loadChildren: () => import('./Pages/transmicuenta/transmicuenta.module').then( m => m.TransmicuentaPageModule)
  },
  {
    path: 'transtercero',
    loadChildren: () => import('./Pages/transtercero/transtercero.module').then( m => m.TransterceroPageModule)
  },
  {
    path: 'transmicuentaform/:numero',
    loadChildren: () => import('./Pages/transmicuentaform/transmicuentaform.module').then( m => m.TransmicuentaformPageModule)
  },
  {
    path: 'transterceroform/:numero',
    loadChildren: () => import('./Pages/transterceroform/transterceroform.module').then( m => m.TransterceroformPageModule)
  },
  {
    path: 'seleccionarcuenta',
    loadChildren: () => import('./Pages/seleccionarcuenta/seleccionarcuenta.module').then( m => m.SeleccionarcuentaPageModule)
  },
  {
    path: 'destino/:numero',
    loadChildren: () => import('./Pages/destino/destino.module').then( m => m.DestinoPageModule)
  },
  {
    path: 'escaner',
    loadChildren: () => import('./Pages/escaner/escaner.module').then( m => m.EscanerPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./Pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./Pages/crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
