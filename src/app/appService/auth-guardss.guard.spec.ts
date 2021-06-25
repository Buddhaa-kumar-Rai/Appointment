import { TestBed } from '@angular/core/testing';

import { AuthGuardssGuard } from './auth-guardss.guard';

describe('AuthGuardssGuard', () => {
  let guard: AuthGuardssGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardssGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
