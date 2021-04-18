import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarcuentaPageRoutingModule } from './seleccionarcuenta-routing.module';

import { SeleccionarcuentaPage } from './seleccionarcuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarcuentaPageRoutingModule
  ],
  declarations: [SeleccionarcuentaPage]
})
export class SeleccionarcuentaPageModule {}
