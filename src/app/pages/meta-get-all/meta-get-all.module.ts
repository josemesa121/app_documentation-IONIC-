import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaGetAllPageRoutingModule } from './meta-get-all-routing.module';

import { MetaGetAllPage } from './meta-get-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaGetAllPageRoutingModule
  ],
  declarations: [MetaGetAllPage]
})
export class MetaGetAllPageModule {}
