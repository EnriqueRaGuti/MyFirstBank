import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarcuentaPage } from './seleccionarcuenta.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarcuentaPageRoutingModule {}
