import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecuentaPageRoutingModule } from './detallecuenta-routing.module';

import { DetallecuentaPage } from './detallecuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecuentaPageRoutingModule
  ],
  declarations: [DetallecuentaPage]
})
export class DetallecuentaPageModule {}
