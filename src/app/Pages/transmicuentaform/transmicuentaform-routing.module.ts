import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransmicuentaformPage } from './transmicuentaform.page';

const routes: Routes = [
  {
    path: '',
    component: TransmicuentaformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransmicuentaformPageRoutingModule {}
