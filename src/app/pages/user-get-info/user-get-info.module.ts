import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserGetInfoPageRoutingModule } from './user-get-info-routing.module';

import { UserGetInfoPage } from './user-get-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserGetInfoPageRoutingModule
  ],
  declarations: [UserGetInfoPage]
})
export class UserGetInfoPageModule {}
