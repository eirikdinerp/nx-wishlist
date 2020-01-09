import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListComponent } from './wish-list.component';
import { UiModule } from '@wishlist/ui';
import { MatIconModule } from '@angular/material/icon';
import { WishService } from '../wish.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;

  const wishServiceMock = {
    getAll: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishListComponent],
      imports: [RouterTestingModule, MatIconModule, UiModule],
      providers: [{ provide: WishService, useValue: wishServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
