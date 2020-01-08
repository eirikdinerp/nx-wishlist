import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { WishList } from '@wishlist/data';
import { switchMap } from 'rxjs/operators';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'portal-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.scss']
})
export class WishlistDetailComponent implements OnInit {
  wishlist$: Observable<WishList>;

  constructor(
    private route: ActivatedRoute,
    private wishlistService: WishlistService
  ) {
    this.wishlist$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.wishlistService.getWishlist(params.get('id'))
      )
    );
  }

  ngOnInit() {}
}
