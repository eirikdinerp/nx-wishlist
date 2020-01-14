import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

import { Wishlist } from '@wishlist/data';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiRoot = 'api/wishlists';

  private readonly _wishlists = new BehaviorSubject<Wishlist[]>([]);
  readonly wishlists$ = this._wishlists.asObservable();

  constructor(private http: HttpClient) {}

  getWishlists(): void {
    this.getAll().subscribe();
  }

  private getAll(): Observable<Wishlist[]> {
    return this.http
      .get<Wishlist[]>(`${this.apiRoot}`)
      .pipe(tap(wls => this._wishlists.next(wls)));
  }

  getOne(id: string) {
    return this.getAll().pipe(
      map((wishlists: Wishlist[]) => wishlists.find(wl => wl._id === id))
    );
  }

  create(wishlist: Wishlist) {
    return this.http.post(`${this.apiRoot}`, wishlist);
  }

  remove(wishlist: Wishlist) {
    return this.http.delete(`${this.apiRoot}/${wishlist._id}`);
  }

  update(wishlist: Wishlist) {
    return this.http.put(`${this.apiRoot}/${wishlist._id}`, wishlist);
  }
}
