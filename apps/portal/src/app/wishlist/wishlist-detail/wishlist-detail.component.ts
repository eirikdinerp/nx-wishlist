import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Wishlist } from '@wishlist/data';
import { switchMap } from 'rxjs/operators';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'portal-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.scss']
})
export class WishlistDetailComponent implements OnInit {
  wishlist$: Observable<Wishlist>;

  constructor(
    private route: ActivatedRoute,
    private wishlistService: WishlistService
  ) {
    this.wishlist$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.wishlistService.getOne(params.get('id'))
      )
    );
  }

  ngOnInit() {}
}
