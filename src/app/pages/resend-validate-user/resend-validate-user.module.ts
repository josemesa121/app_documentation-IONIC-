import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResendValidateUserPageRoutingModule } from './resend-validate-user-routing.module';

import { ResendValidateUserPage } from './resend-validate-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResendValidateUserPageRoutingModule
  ],
  declarations: [ResendValidateUserPage]
})
export class ResendValidateUserPageModule {}
