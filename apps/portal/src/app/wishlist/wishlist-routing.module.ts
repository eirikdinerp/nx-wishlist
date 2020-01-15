import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistDetailComponent } from './wishlist-detail/wishlist-detail.component';
import { AuthGuard } from '../auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../interceptor.service';

const routes: Routes = [
  {
    path: 'wishlists',
    component: WishlistListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'wishlist/:id',
    component: WishlistDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class WishlistRoutingModule {}
