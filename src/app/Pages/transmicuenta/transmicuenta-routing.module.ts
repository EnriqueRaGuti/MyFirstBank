import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransmicuentaPage } from './transmicuenta.page';

const routes: Routes = [
  {
    path: '',
    component: TransmicuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransmicuentaPageRoutingModule {}
