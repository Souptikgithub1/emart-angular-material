import { TestBed } from '@angular/core/testing';

import { NavSideMenuService } from './nav-side-menu.service';

describe('NavSideMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavSideMenuService = TestBed.get(NavSideMenuService);
    expect(service).toBeTruthy();
  });
});
