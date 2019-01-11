import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideMenuComponent } from './nav-side-menu.component';

describe('NavSideMenuComponent', () => {
  let component: NavSideMenuComponent;
  let fixture: ComponentFixture<NavSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
