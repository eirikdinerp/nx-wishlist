import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Wishlist } from '@wishlist/data';

@Component({
  selector: 'ui-wishlists',
  templateUrl: './wishlists.component.html',
  styleUrls: ['./wishlists.component.scss']
})
export class WishlistsComponent {
  @Input() wishlists: Wishlist[];
  @Output() viewList = new EventEmitter<Wishlist>();
  @Output() deleteList = new EventEmitter<Wishlist>();

  layout = {
    cols: 1,
    rows: 1
  };

  constructor(private breakpointObserver: BreakpointObserver) {
    /** Based on the screen size, switch from standard to one column per row */
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(brState => {
      if (brState.matches) {
        this.layout.cols = 2;
        this.layout.rows = 1;
      } else {
        this.layout.cols = 1;
        this.layout.rows = 1;
      }
    });
  }

  onViewClicked(wl: Wishlist) {
    this.viewList.emit(wl);
  }

  onDeleteClicked(wl: Wishlist) {
    this.deleteList.emit(wl);
  }
}
