import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistDetailComponent } from './wishlist-detail/wishlist-detail.component';

const routes: Routes = [
  {
    path: 'wishlists',
    component: WishlistListComponent
  },
  {
    path: 'wishlist/:id',
    component: WishlistDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule {}
