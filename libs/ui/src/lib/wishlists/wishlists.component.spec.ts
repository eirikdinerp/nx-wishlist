import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistsComponent } from './wishlists.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

describe('WishlistsComponent', () => {
  let component: WishlistsComponent;
  let fixture: ComponentFixture<WishlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistsComponent],
      imports: [MatGridListModule, MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
