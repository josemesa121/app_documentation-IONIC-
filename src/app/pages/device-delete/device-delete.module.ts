import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceDeletePageRoutingModule } from './device-delete-routing.module';

import { DeviceDeletePage } from './device-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceDeletePageRoutingModule
  ],
  declarations: [DeviceDeletePage]
})
export class DeviceDeletePageModule {}
