import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wish } from '@wishlist/data';
import { WishService } from '../wish.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
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
    this.wishes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getAll(params.get('id')))
    );
  }

  ngOnInit() {
    // this.create();
  }

  openNewDialog() {
    const dialogRef = this.dialog.open(DialogNew, {
      width: '250px',
      data: { title: '' }
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap(result => {
          if (result) {
            const wishlistId = this.route.snapshot.paramMap.get('id');
            Object.assign(result, { wishlistId: wishlistId });
            return this.service.create(result);
          }
          return of(null);
        })
      )
      .subscribe(val => {});
  }

  create() {
    const wishlistId = this.route.snapshot.paramMap.get('id');
    const wish: Wish = {
      title: 'new car',
      wishlistId: wishlistId
    };

    this.service.create(wish).subscribe(w => console.log('created', w));
  }
}
