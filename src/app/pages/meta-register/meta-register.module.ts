import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaRegisterPageRoutingModule } from './meta-register-routing.module';

import { MetaRegisterPage } from './meta-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaRegisterPageRoutingModule
  ],
  declarations: [MetaRegisterPage]
})
export class MetaRegisterPageModule {}
