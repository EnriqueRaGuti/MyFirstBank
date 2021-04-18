import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransmicuentaformPageRoutingModule } from './transmicuentaform-routing.module';

import { TransmicuentaformPage } from './transmicuentaform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransmicuentaformPageRoutingModule
  ],
  declarations: [TransmicuentaformPage]
})
export class TransmicuentaformPageModule {}
