import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Wish } from '@wishlist/data';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private apiRoot = 'api/wishlists';

  constructor(private http: HttpClient) {}

  getAll(wishlistId: number | string): Observable<Wish[]> {
    // this is if I want to use query params
    // const getOptions = {
    //   params: new HttpParams().set('wishlistId', '' + wishlistId)
    // };
    return this.http.get<Wish[]>(`${this.apiRoot}/${wishlistId}/wishes`);
  }

  getOne(wishlistId: string, id: string) {
    return this.getAll(wishlistId).pipe(
      map((wishlists: Wish[]) => wishlists.find(wl => wl._id === id))
    );
  }

  create(wish: Wish) {
    return this.http.post(`${this.apiRoot}/${wish.wishlistId}/wishes`, wish);
  }
}
