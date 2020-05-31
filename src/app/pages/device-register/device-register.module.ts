import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceRegisterPageRoutingModule } from './device-register-routing.module';

import { DeviceRegisterPage } from './device-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceRegisterPageRoutingModule
  ],
  declarations: [DeviceRegisterPage]
})
export class DeviceRegisterPageModule {}
