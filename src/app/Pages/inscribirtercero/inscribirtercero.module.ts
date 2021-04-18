import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscribirterceroPageRoutingModule } from './inscribirtercero-routing.module';

import { InscribirterceroPage } from './inscribirtercero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscribirterceroPageRoutingModule
  ],
  declarations: [InscribirterceroPage]
})
export class InscribirterceroPageModule {}
