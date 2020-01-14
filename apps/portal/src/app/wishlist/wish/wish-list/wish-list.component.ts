import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wish } from '@wishlist/data';
import { WishService } from '../wish.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap, flatMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogNew } from '@wishlist/ui';

@Component({
  selector: 'portal-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishes$: Observable<Wish[]>;

  constructor(
    private service: WishService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.wishes$ = this.service.wishes$;
  }

  ngOnInit() {
    const wishlistId = this.route.snapshot.paramMap.get('id');
    this.service.getWishes(wishlistId);
  }

  openNewDialog() {
    const wishlistId = this.route.snapshot.paramMap.get('id');

    const dialogRef = this.dialog.open(DialogNew, {
      width: '250px',
      data: { title: '' }
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap(result => {
          if (result) {
            Object.assign(result, { wishlistId: wishlistId });
            return this.service.create(result);
          }
          return of(null);
        })
      )
      .subscribe(val => this.service.getWishes(wishlistId));
  }

  openWish(w: Wish) {
    console.log('Show wish details for', w);
  }

  deleteWish(w: Wish) {
    const wishlistId = this.route.snapshot.paramMap.get('id');
    this.service.remove(w).subscribe(() => this.service.getWishes(wishlistId));
  }
}
