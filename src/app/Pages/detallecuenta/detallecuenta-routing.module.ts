import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallecuentaPage } from './detallecuenta.page';

const routes: Routes = [
  {
    path: '',
    component: DetallecuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallecuentaPageRoutingModule {}
