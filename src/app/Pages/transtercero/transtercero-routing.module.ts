import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransterceroPage } from './transtercero.page';

const routes: Routes = [
  {
    path: '',
    component: TransterceroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransterceroPageRoutingModule {}
