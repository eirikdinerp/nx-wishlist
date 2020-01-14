import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Observable, of } from 'rxjs';

import { Wishlist, Wish } from '@wishlist/data';
import { DialogNew } from '@wishlist/ui';

import { WishlistService } from '../wishlist.service';
import { switchMap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'portal-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent implements OnInit {
  wishlists$: Observable<Wishlist[]>;

  constructor(
    private router: Router,
    private wishlistService: WishlistService,
    public dialog: MatDialog
  ) {
    this.wishlists$ = this.wishlistService.wishlists$;
  }

  ngOnInit() {
    this.wishlistService.getWishlists();
  }

  openWishlist(wl: Wishlist) {
    this.router.navigate([`/wishlist/${wl['_id']}`]);
  }

  deleteWishlist(wl: Wish) {
    this.wishlistService
      .remove(wl)
      .subscribe(() => this.wishlistService.getWishlists());
  }

  saveWishlist(wl: Wish) {
    this.wishlistService.update(wl).subscribe(t => console.log('updated:', t));
  }

  openNewDialog() {
    const dialogRef = this.dialog.open(DialogNew, {
      width: '250px',
      data: { title: '' }
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap(result =>
          result ? this.wishlistService.create(result) : of(null)
        )
      )
      .subscribe(val => {
        if (val) {
          this.wishlistService.getWishlists();
        }
      });
  }
}
