import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscribirterceroPage } from './inscribirtercero.page';

const routes: Routes = [
  {
    path: '',
    component: InscribirterceroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscribirterceroPageRoutingModule {}
