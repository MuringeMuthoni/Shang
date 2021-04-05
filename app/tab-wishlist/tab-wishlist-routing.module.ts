import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabWishlistPage } from './tab-wishlist.page';

const routes: Routes = [
  {
    path: '',
    component: TabWishlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabWishlistPageRoutingModule {}
