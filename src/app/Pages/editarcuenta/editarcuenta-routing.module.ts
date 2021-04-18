import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarcuentaPage } from './editarcuenta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarcuentaPageRoutingModule {}
