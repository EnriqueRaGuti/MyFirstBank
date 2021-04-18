import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarcuentaPageRoutingModule } from './editarcuenta-routing.module';

import { EditarcuentaPage } from './editarcuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarcuentaPageRoutingModule
  ],
  declarations: [EditarcuentaPage]
})
export class EditarcuentaPageModule {}
