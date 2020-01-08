import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { WishList } from '@wishlist/data';

import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'portal-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent implements OnInit {
  wishlists$: Observable<WishList[]>;

  constructor(
    private router: Router,
    private wishlistService: WishlistService
  ) {
    this.wishlists$ = this.wishlistService.getWishlists();
  }

  ngOnInit() {}

  openWishlist(wl: WishList) {
    this.router.navigate([`/wishlist/${wl.id}`]);
  }
}
