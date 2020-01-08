import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WishList } from '@wishlist/data';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiRoot = 'api/wishlist';

  constructor(private http: HttpClient) {}

  getWishlists(): Observable<WishList[]> {
    return this.http.get<WishList[]>(`${this.apiRoot}/all`);
  }

  getWishlist(id: number | string) {
    return this.getWishlists().pipe(
      map((wishlists: WishList[]) => wishlists.find(wl => wl.id === +id))
    );
  }
}
