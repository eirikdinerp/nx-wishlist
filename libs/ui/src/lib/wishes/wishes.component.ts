import { Component, OnInit, Input } from '@angular/core';
import { Wish } from '@wishlist/data';
@Component({
  selector: 'wishlist-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  @Input() wishes: Wish[];

  constructor() {}

  ngOnInit() {}
}
