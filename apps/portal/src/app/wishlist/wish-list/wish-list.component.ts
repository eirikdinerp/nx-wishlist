import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wish } from '@wishlist/data';
import { WishService } from '../wish.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'portal-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishes$: Observable<Wish[]>;

  constructor(private service: WishService, private route: ActivatedRoute) {
    this.wishes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getAll(params.get('id')))
    );
  }

  ngOnInit() {}
}
