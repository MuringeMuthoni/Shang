import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMycoursesPageRoutingModule } from './tab-mycourses-routing.module';

import { TabMycoursesPage } from './tab-mycourses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMycoursesPageRoutingModule
  ],
  declarations: [TabMycoursesPage]
})
export class TabMycoursesPageModule {}
