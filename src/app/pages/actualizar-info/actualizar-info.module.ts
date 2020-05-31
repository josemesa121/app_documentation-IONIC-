import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarInfoPageRoutingModule } from './actualizar-info-routing.module';

import { ActualizarInfoPage } from './actualizar-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarInfoPageRoutingModule
  ],
  declarations: [ActualizarInfoPage]
})
export class ActualizarInfoPageModule {}
