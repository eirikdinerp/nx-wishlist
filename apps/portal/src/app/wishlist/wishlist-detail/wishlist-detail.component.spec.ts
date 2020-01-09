import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistDetailComponent } from './wishlist-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WishlistService } from '../wishlist.service';
import { WishListComponent } from '../wish/wish-list/wish-list.component';
import { UiModule } from '@wishlist/ui';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WishlistDetailComponent', () => {
  let component: WishlistDetailComponent;
  let fixture: ComponentFixture<WishlistDetailComponent>;
  const wishlistServiceMock = {
    getOne: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistDetailComponent, WishListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        UiModule,
        MatIconModule
      ],
      providers: [{ provide: WishlistService, useValue: wishlistServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
