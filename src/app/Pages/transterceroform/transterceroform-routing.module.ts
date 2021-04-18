import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransterceroformPage } from './transterceroform.page';

const routes: Routes = [
  {
    path: '',
    component: TransterceroformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransterceroformPageRoutingModule {}
