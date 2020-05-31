import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgenteEscritoPageRoutingModule } from './agente-escrito-routing.module';

import { AgenteEscritoPage } from './agente-escrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgenteEscritoPageRoutingModule
  ],
  declarations: [AgenteEscritoPage]
})
export class AgenteEscritoPageModule {}
