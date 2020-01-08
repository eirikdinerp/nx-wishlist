import { Component, ComponentFactoryResolver } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  // fetch() {
  //   this.http.get<Wish[]>('/api/wishes/all').subscribe(w => (this.wishes = w));
  // }

  // addWish() {
  //   this.http.post('/api/wishes/add', {}).subscribe(() => {
  //     this.fetch();
  //   });
  // }

  // deleteWish(id: number) {
  //   this.http.post('api/wishes/delete', { id: id }).subscribe(() => {
  //     this.fetch();
  //   });
  // }
}
