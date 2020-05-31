import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaGetPageRoutingModule } from './meta-get-routing.module';

import { MetaGetPage } from './meta-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaGetPageRoutingModule
  ],
  declarations: [MetaGetPage]
})
export class MetaGetPageModule {}
