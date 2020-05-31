import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaUpdatePageRoutingModule } from './meta-update-routing.module';

import { MetaUpdatePage } from './meta-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaUpdatePageRoutingModule
  ],
  declarations: [MetaUpdatePage]
})
export class MetaUpdatePageModule {}
