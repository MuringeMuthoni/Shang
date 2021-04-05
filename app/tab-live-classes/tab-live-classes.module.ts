import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabLiveClassesPageRoutingModule } from './tab-live-classes-routing.module';

import { TabLiveClassesPage } from './tab-live-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabLiveClassesPageRoutingModule
  ],
  declarations: [TabLiveClassesPage]
})
export class TabLiveClassesPageModule {}
