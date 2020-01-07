import { Component, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wish } from '@wishlist/data';

@Component({
  selector: 'wishlist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  wishes: Wish[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Wish[]>('/api/wishes/all').subscribe(w => (this.wishes = w));
  }

  addWish() {
    this.http.post('/api/wishes/add', {}).subscribe(() => {
      this.fetch();
    });
  }

  deleteWish(id: number) {
    this.http.post('api/wishes/delete', { id: id }).subscribe(() => {
      this.fetch();
    })
  }
}
