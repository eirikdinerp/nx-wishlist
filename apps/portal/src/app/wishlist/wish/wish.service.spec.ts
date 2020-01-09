import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WishService } from './wish.service';

describe('WishService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('should be created', () => {
    const service: WishService = TestBed.get(WishService);
    expect(service).toBeTruthy();
  });
});
