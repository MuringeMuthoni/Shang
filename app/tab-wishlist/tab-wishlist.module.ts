import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabWishlistPageRoutingModule } from './tab-wishlist-routing.module';

import { TabWishlistPage } from './tab-wishlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabWishlistPageRoutingModule
  ],
  declarations: [TabWishlistPage]
})
export class TabWishlistPageModule {}
