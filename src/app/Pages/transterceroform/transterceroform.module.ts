import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransterceroformPageRoutingModule } from './transterceroform-routing.module';

import { TransterceroformPage } from './transterceroform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransterceroformPageRoutingModule
  ],
  declarations: [TransterceroformPage]
})
export class TransterceroformPageModule {}
