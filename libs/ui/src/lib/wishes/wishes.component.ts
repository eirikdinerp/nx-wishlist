import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wish } from '@wishlist/data';

@Component({
  selector: 'ui-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  @Input() wishes: Wish[];

  @Output() deleteClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  deleteWish(id: number) {
    this.deleteClicked.emit(id);
  }
}
