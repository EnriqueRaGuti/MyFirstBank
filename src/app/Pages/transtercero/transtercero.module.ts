import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransterceroPageRoutingModule } from './transtercero-routing.module';

import { TransterceroPage } from './transtercero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransterceroPageRoutingModule
  ],
  declarations: [TransterceroPage]
})
export class TransterceroPageModule {}
