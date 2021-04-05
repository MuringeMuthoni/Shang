import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMycoursesPage } from './tab-mycourses.page';

const routes: Routes = [
  {
    path: '',
    component: TabMycoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMycoursesPageRoutingModule {}
