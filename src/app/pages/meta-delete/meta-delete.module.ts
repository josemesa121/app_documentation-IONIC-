import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaDeletePageRoutingModule } from './meta-delete-routing.module';

import { MetaDeletePage } from './meta-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaDeletePageRoutingModule
  ],
  declarations: [MetaDeletePage]
})
export class MetaDeletePageModule {}
