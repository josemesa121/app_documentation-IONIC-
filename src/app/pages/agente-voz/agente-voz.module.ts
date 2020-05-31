import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgenteVozPageRoutingModule } from './agente-voz-routing.module';

import { AgenteVozPage } from './agente-voz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgenteVozPageRoutingModule
  ],
  declarations: [AgenteVozPage]
})
export class AgenteVozPageModule {}
