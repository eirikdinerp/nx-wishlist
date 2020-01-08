import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@wishlist/ui';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistDetailComponent } from './wishlist-detail/wishlist-detail.component';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [
    WishlistListComponent,
    WishlistDetailComponent,
    WishListComponent
  ],
  imports: [CommonModule, WishlistRoutingModule, UiModule],
  exports: [WishlistListComponent, WishlistDetailComponent]
})
export class WishlistModule {}
