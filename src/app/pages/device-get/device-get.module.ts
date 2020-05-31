import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceGetPageRoutingModule } from './device-get-routing.module';

import { DeviceGetPage } from './device-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceGetPageRoutingModule
  ],
  declarations: [DeviceGetPage]
})
export class DeviceGetPageModule {}
