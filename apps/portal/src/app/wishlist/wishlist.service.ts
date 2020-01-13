import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Wishlist } from '@wishlist/data';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiRoot = 'api/wishlists';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(`${this.apiRoot}`);
  }

  getOne(id: string) {
    return this.getAll().pipe(
      map((wishlists: Wishlist[]) => wishlists.find(wl => wl._id === id))
    );
  }

  create(wishlist: Wishlist) {
    return this.http.post(`${this.apiRoot}`, wishlist);
  }
}
