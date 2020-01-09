import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Observable, of } from 'rxjs';

import { Wishlist } from '@wishlist/data';
import { DialogNew } from '@wishlist/ui';

import { WishlistService } from '../wishlist.service';
import { switchMap } from 'rxjs/operators';

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
    this.wishlists$ = this.wishlistService.getAll();
  }

  ngOnInit() {
    // this.create();
  }

  openWishlist(wl: Wishlist) {
    this.router.navigate([`/wishlist/${wl['_id']}`]);
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
      .subscribe(val => {});
  }

  create() {
    const wl: Wishlist = {
      title: 'Christmas 2020',
      description: 'What I want for christmas this year'
    };

    this.wishlistService.create(wl).subscribe(w => console.log('created', w));
  }
}
