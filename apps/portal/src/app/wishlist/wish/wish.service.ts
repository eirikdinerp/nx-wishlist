import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Wish } from '@wishlist/data';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private apiRoot = 'api/wishlists';

  private readonly _wishes = new BehaviorSubject<Wish[]>([]);
  readonly wishes$ = this._wishes.asObservable();

  constructor(private http: HttpClient) {}

  getWishes(wishlistId: string) {
    this.getAll(wishlistId).subscribe();
  }

  private getAll(wishlistId: number | string): Observable<Wish[]> {
    return this.http
      .get<Wish[]>(`${this.apiRoot}/${wishlistId}/wishes`)
      .pipe(tap(ws => this._wishes.next(ws)));
  }

  private getOne(wishlistId: string, id: string) {
    return this.getAll(wishlistId).pipe(
      map((wishlists: Wish[]) => wishlists.find(wl => wl._id === id))
    );
  }

  create(wish: Wish) {
    return this.http.post(`${this.apiRoot}/${wish.wishlistId}/wishes`, wish);
  }

  remove(wish: Wish) {
    return this.http.delete(
      `${this.apiRoot}/${wish.wishlistId}/wishes/${wish._id}`
    );
  }
}
