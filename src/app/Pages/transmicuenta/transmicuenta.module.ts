import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransmicuentaPageRoutingModule } from './transmicuenta-routing.module';

import { TransmicuentaPage } from './transmicuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransmicuentaPageRoutingModule
  ],
  declarations: [TransmicuentaPage]
})
export class TransmicuentaPageModule {}
