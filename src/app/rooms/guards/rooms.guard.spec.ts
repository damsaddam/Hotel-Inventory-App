import { TestBed } from '@angular/core/testing';

import { RoomsGuard } from './rooms.guard';

describe('RoomsGuard', () => {
  let guard: RoomsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoomsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
