import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresoMoodlePageRoutingModule } from './progreso-moodle-routing.module';

import { ProgresoMoodlePage } from './progreso-moodle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresoMoodlePageRoutingModule
  ],
  declarations: [ProgresoMoodlePage]
})
export class ProgresoMoodlePageModule {}
