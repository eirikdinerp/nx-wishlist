import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TableTestComponent } from './table-test/table-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { WishlistListComponent } from './wishlist/wishlist-list/wishlist-list.component';

const appRoutes: Routes = [
  // { path: 'wishlists', component: WishlistListComponent },
  { path: 'me', component: TableTestComponent },
  {
    path: '',
    redirectTo: '/wishlists',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
