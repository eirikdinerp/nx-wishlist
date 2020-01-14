import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wish } from '@wishlist/data';

@Component({
  selector: 'ui-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  @Input() wishes: Wish[];

  @Output() viewWish = new EventEmitter<Wish>();
  @Output() deleteWish = new EventEmitter<Wish>();

  constructor() {}

  ngOnInit() {}

  onDeleteClicked(w: Wish) {
    this.deleteWish.emit(w);
  }

  onViewClicked(w: Wish) {
    this.viewWish.emit(w);
  }
}
